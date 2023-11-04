
"use client"

import { SendHorizontal } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendToTelegram } from '@/lib/telegramBotSend';
import toast from 'react-hot-toast';



const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Please Provide Your Real Name",
  }),
  email: z.string().email({
    message: "Please provide a valid email.",
  }),
  phone: z.string().refine(value => /^\+\d{1,3}\d{3}\d{3}\d{4}$/.test(value), {
    message: "Please provide a valid phone number in the format: '+XXXXXXXXXXXXX'.",
  }),
  subject: z.string().min(10, {
    message: "Please make sure your subject title is between 10 and 300 characters.",
  }).max(300, {
    message: "Please make sure your subject title is between 10 and 300 characters.",
  }),
  ddescription: z.string().optional(),
  message: z.string().optional(),
})


const ContactForm = () => {

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      subject: "",
      description: "",
      message: ""
    },
  })

  async function onSubmit(data) {
    const res = sendToTelegram(data)
    toast.promise(res, {
      loading: 'just a sec',
      success: 'Your Message is Recieved.',
      error: 'Please try again later',
    })

    const result = await res

    if (result) {
      form.reset()
    }
  }

  return (
    <section className="paddings relative z-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="w-full flex flex-col md:flex-row gap-12 pb-12 px-4 md:px-24">
            <FormField
            className="w-full"
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xl ">What is your name?</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full text-2xl px-4 py-10 no-focus bg-transparent border-primary shadow-2xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            className="w-full"
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xl ">And your Email ?</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full text-2xl px-4 py-10 no-focus bg-transparent border-primary shadow-2xl"  />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-12 pb-12 px-4 md:px-24">
            <FormField
            className="w-full"
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xl ">Your phone number:</FormLabel>
                  <FormControl>
                    <Input {...field} className="w-full text-2xl px-4 py-10 no-focus bg-transparent border-primary shadow-2xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
            className="w-full"
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xl ">What can I do for you?</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g : I need a Personal Portfolio" {...field} className="w-full text-2xl px-4 py-10 no-focus bg-transparent border-primary shadow-2xl" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
          </div>
          <div className="w-full flex flex-col md:flex-row gap-12 px-4 pb-12 md:px-24">
            <FormField
              className="w-full"
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-xl ">Give me a short description :</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="w-full text-2xl px-4 py-2 no-focus bg-transparent border-primary shadow-2xl drop-shadow-2xl resize-none"  />
                  </FormControl>
                </FormItem>
              )}
            />
              <FormField
                className="w-full"
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-xl ">Any thing else you would like to say?</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="w-full text-2xl px-4 py-2  no-focus bg-transparent border-primary shadow-2xl resize-none"  />
                    </FormControl>
                  </FormItem>
                )}
              />
          </div>
          <Button size="xl" type="submit" className="mt-12 flex items-center gap-2 text-2xl mx-auto">
            <span>Send</span>
            <SendHorizontal size={18} />
          </Button>
        </form>
      </Form>
    </section>
  )
}

export default ContactForm