'use client'
import zodResolver from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "~/components/ui/field"
import 'react-phone-number-input/style.css'
import { Input } from "~/components/ui/input"
import { useState, type FormEvent } from "react";
import { Button } from "~/components/ui/button"

import { Resend } from 'resend';





export default function ContactPage(){
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function submitTest(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log('Submitting: ', {fullname, email, message} )
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        if (!fullname || !email || !message){
            toast.error('please fill in all required fields')
            return
        }
        
        await fetch ('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullname,
                email: email,
                message: message,
               //phone: ''
            })
        }).then (
            res => (
                res.ok ? toast.success('message sent successfully') : toast.error('failed to send message')
            )
        )
        .catch (err => {
            console.log(err)
            toast.error('An error occurred while sending the message')
        }
        )


    }
    return(
        <div className="">
                <h1 className="text-9xl font-bold text-center">contact me</h1>


        <form onSubmit={handleSubmit} className="p-12 ">
            <FieldGroup>
            <FieldSet>
            <Field>
                <FieldLabel htmlFor="fullname" className="font-bold">full name</FieldLabel>
                <Input value={fullname} onChange={e => setFullname(e.target.value)} className="border-b  text-white" id="fullname" type="text"  />
            </Field>
            <Field>
                <FieldLabel htmlFor="email" className="font-bold">email</FieldLabel>
                <Input value={email} onChange={e => setEmail(e.target.value)} className="border-b  text-white" id="email" type="email" />
            </Field>
            <Field>
                <FieldLabel htmlFor="message" className="font-bold">message</FieldLabel>
                <textarea
                value={message} 
                onChange={e => setMessage(e.target.value)}
                className="p-3 active:ring-0 active:outline-none focus:ring-0 focus:outline-none border-b"
                id="message"
                rows={4}
                />
            </Field>
                <Button type="submit" className="mt-4  bg-white hover:text- text-primary px-4 py-2">
                    send message
                </Button>
        </FieldSet>
         </FieldGroup>
        </form>
        </div>
    )
}