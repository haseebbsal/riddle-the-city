'use client'
import axiosInstance from "@/app/utils/axiosInstance"
import { Input } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { CiMail } from "react-icons/ci"
import { useMutation } from "react-query"
type ForgotPasswordData = {
    email:string
}
export default function ForgotPassword() {
    const navigate = useRouter()
    const [email, setEmail] = useState<string | null>()
    const [invalid, setInvalid] = useState(false)
    const [message, setMessage] = useState('')
    const forgotPasswordMutation = useMutation((data: ForgotPasswordData) => axiosInstance.post('/riddle/api/auth/forgot-password', data), {
        onSuccess(data) {
            console.log(data)
            setInvalid(false)
            navigate.replace(`/admin/new-password?email=${email}`)
        },
        onError(error: any) {
            setInvalid(true)
            setMessage(error.response.data.message)
        },
    })
    function handleSubmit(e:FormEvent) {
        e.preventDefault()
        // const form = e.target as any as HTMLFormElement
        // const formData = new FormData(form)
        const passwordData:ForgotPasswordData = {
            email:email as any as string
        }
        forgotPasswordMutation.mutate(passwordData)
    }
    return (
        <>
            <form onSubmit={handleSubmit} className="h-full w-full items-center  flex flex-col gap-4 p-8 sm:p-24">
                <h1 className="text-2xl font-bold">Welcome Back!</h1>
                {invalid && <p className="text-red-600">{message}</p>}
                <p>Please use your email and password to login</p>
                <Input
                    onChange={(e) => { setEmail(e.target.value) }}
                    required
                    className="w-full"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="you@example.com"
                    labelPlacement="outside"
                    startContent={
                        <CiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                />
                <button type="submit" className="bg-[#A92223] rounded-lg p-4 text-center text-white w-[80%]">Continue</button>
            </form>
        </>
    )
}