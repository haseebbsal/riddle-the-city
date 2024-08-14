'use client'
import axiosInstance from "@/app/utils/axiosInstance";
import { Button, Input, Modal, Textarea, ModalBody, ModalContent, ModalFooter, ModalHeader, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import { FormEvent } from "react";
import { ImSpinner2 } from "react-icons/im";
import { PiUploadSimpleFill } from "react-icons/pi";
import { useMutation } from "react-query";
export default function Help() {
    const { isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2 } = useDisclosure();
    const helpMutation = useMutation((data: any) => axiosInstance.postForm('/riddle/api/platform/support', data), {
        onSuccess(data, variables, context) {
            console.log(data)
            onOpen2()
        },
    })
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        const form = e.target as any as HTMLFormElement
        const formData = new FormData(form)
        console.log([...formData.entries()])
        // const data: FeedbackData = {
        //     description: formData.get('description') as any as string,
        //     rating
        // }
        helpMutation.mutate(formData)
        // feedbackMutation.mutate(data)
    }
    return (
        <>
            <div className="flex flex-col gap-4 px-4 h-full">
                <p className="font-semibold text-xl">Help & Support</p>
                <form onSubmit={handleSubmit} className="flex flex-col border-1 rounded-lg gap-4 p-4">
                    {/* <p className="font-semibold">Contact Us</p>
                    <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit commodo enim tellus et nascetur at leo accumsan, odio habitanLorem ipsum dolor sit amet consectetur adipiscing elit suscipit commodo enim tellus et nascetur at leo accumsan, odio habitan Lorem ipsum.</p> */}
                    <Input
                        name="title"
                        required
                        className="sm:w-1/2 w-full"
                        type="text"
                        label="Title"
                        placeholder="Enter Title"
                        labelPlacement="outside"
                        classNames={{label:"font-semibold"}}
                    />
                    <Textarea
                        required
                        name="description"
                        label="Description"
                        placeholder="Enter Description"
                        className="sm:w-1/2 w-full"
                        labelPlacement="outside"
                        size="lg"
                        minRows={10}
                        classNames={{ description: "!h-[15rem]", label: "!font-semibold" }}
                    />
                    <label htmlFor="media" className="flex relative flex-col gap-2">
                        <p className="font-semibold">Upload Media</p>
                        <div className="bg-[#cdebf4] items-center rounded-lg border-[#29A4CB] border-dotted py-4 sm:w-1/2 w-full cursor-pointer border-2 flex flex-col">
                            <PiUploadSimpleFill className="text-[#29A4CB]" />
                            <p className="text-[#29A4CB] text-sm">Upload Images or Other Media</p>
                        </div>
                        <input multiple type="file" className="invisible absolute" name="files" id="media" />
                    </label>
                    <button type="submit" className="px-16 py-2 bg-[#A92223] flex justify-center rounded text-white w-max ">{helpMutation.isLoading ? <ImSpinner2 className="text-xl animate-spin" /> : "Submit"}</button>
                </form>
            </div>
            <Modal
                size={"xl"}
                isOpen={isOpen2}
                backdrop="blur"
                onOpenChange={onOpenChange2}
                placement="center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col text-xl gap-1">Query Submitted</ModalHeader>
                            <ModalBody className="flex flex-col gap-4 pb-8">
                                <p className="text-sm ">Your Query has been submitted successfully!</p>
                                <div className="flex w-full gap-4">
                                    <button className="px-16 w-max py-2 bg-[#A92223]  rounded text-white">Okay</button>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}