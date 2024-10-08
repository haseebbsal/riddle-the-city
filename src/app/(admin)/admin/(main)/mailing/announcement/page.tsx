'use client'

import axiosInstance from "@/app/utils/axiosInstance";
import { Button, Input, Textarea } from "@nextui-org/react"
import Image from "next/image";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation } from "react-query";

export default function Announcement(){
    const [allImagesBase64,setAllImagesBase64]=useState<any>([])
    const [allImages,setAllImages]=useState<any>([])
    // console.log('allimages',allImagesBase64)
    const {register,handleSubmit,formState:{errors}}=useForm()
    const createAnnouncementMutation=useMutation((data:FormData)=>axiosInstance.postForm('/mailing/announcement',data),{
        onSuccess(data) {
            console.log('success',data)
        },
    })

    function submitForm(e:FieldValues){
        console.log(e)
        const formData=new FormData()
        if(allImages.length){
            allImages.forEach((e:any)=>{
                formData.append('files',e)
            })
        }
        formData.append('subject',e.subject)
        formData.append('body',e.body)
        console.log('data',[...formData.entries()])
        createAnnouncementMutation.mutate(formData)
    }
    return (
        <>
        <div className="flex justify-between">
            <p className="text-xl font-semibold">Announcement</p>
        </div>
        
        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col gap-4 sm:w-1/2">
            <Input errorMessage={errors.subject?.message as any} isInvalid={errors.subject as any} {...register('subject',{required:"Enter Subject"})} type="text" label="Subject" placeholder="Enter Subject" labelPlacement="outside" classNames={{label:"!font-semibold"}}/>
            <Textarea errorMessage={errors.body?.message as any} isInvalid={errors.body as any} {...register('body',{required:"Enter Body"})} label="Body" minRows={10} placeholder="Write Mail Body..." labelPlacement="outside" classNames={{label:"!font-semibold"}}/>
            <div className="relative w-[10rem] flex flex-col gap-2 w-full">
                <p className="text-sm font-semibold"> Select Mail Files</p>
                {/* {error && <p className="text-red-500 font-semibold">{error}</p>} */}
                <label htmlFor="breweryLogo" className="cursor-pointer block p-4 w-full">
                    <div className="border-[#A92223] rounded-xl bg-red-100 text-[#A92223] text-center border-2 p-4 w-full">
                        Select Files
                    </div>
                </label>
                <input   onChange={(e)=>{
                    if (e.target.files && e.target.files.length > 0) {
                        const file = e.target.files
                        console.log(file)
                        Object.values(file).forEach((e)=>{
                            const newUrl=URL.createObjectURL(e)
                            setAllImagesBase64((prev:any)=>[...prev,newUrl])
                            setAllImages((prev:any)=>[...prev,e])
                        })

                        // setProfileImage(file);
                        // setPreviewImage(URL.createObjectURL(file));
                    }
                }} className="absolute invisible" id="breweryLogo" multiple type="file"/>
            </div>
            <div className="flex flex-wrap gap-4">
                {allImagesBase64.map((e:string)=>
                    <Image src={e} alt="image" width={150} height={150}/>
                )}
            </div>
            <Button isLoading={createAnnouncementMutation.isLoading} isDisabled={createAnnouncementMutation.isLoading} type="submit"
                          className="sm:px-16 px-4 py-2 bg-[#A92223] flex justify-center rounded text-white w-max ">Submit</Button>
        </form>
        </>
    )
}