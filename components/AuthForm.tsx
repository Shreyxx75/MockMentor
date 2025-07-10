"use client"

import Link from "next/link";
import Image from "next/image";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Form} from "@/components/ui/form"
import {toast} from "sonner";
import FormField from '@/components/FormField';
import {useRouter} from "next/navigation";

const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === "sign-up" ? z.string().min(3): z.string().optional(),
        email: z.string().email(),
        password: z.string().min(8, "Password must be at least 8 characters long"),
    })
}

const AuthForm = ({type}: { type: FormType}) => {
    const router = useRouter();
    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (type === "sign-up") {
                toast.success("Successfully signed up!");
                router.push("/sign-in");
            } else {
                toast.success("Successfully signed in!");
                router.push("/");
            }
            toast.success(`Successfully ${type === "sign-in" ? "signed in" : "signed up"}!`);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong, please try again.: ${error}")
        }
    }

    const isSignIn = type === "sign-in"

    return (
    <div className="card-border lg:min-w-[566px]">
        <div className="flex flex-col gap-6 card py-14 px-10">
            <div className="flec flec-row gap-2 justify-center">
                <Image src="/logo.svg" alt="logo" height={32} width={38}/>
                <h2 className="text-primary-100">MockMentor</h2>
            </div>
            <h3>Practice Job Interviews with AI</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                    {!isSignIn && 
                        (<FormField 
                            control={form.control} 
                            name="name" 
                            label="Name" 
                            placeholder="Enter your Username"
                        />)
                    }
                    <FormField 
                        control={form.control} 
                        name="email" 
                        label="Email" 
                        placeholder="Enter your Email Address"
                        type="email"
                    />
                    <FormField 
                        control={form.control} 
                        name="password" 
                        label="Password" 
                        placeholder="Enter your Password"
                        type="password"
                    />
                <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
                </form>
            </Form>
            <p className="text-center">
                {isSignIn ? "Don't have an Account?" : "Have an Account Already?"}
                <Link href={!isSignIn ? "/sign-in" : "/sign-up"} className="font-bold text-user-primary ml-1">
                    {!isSignIn ? "Sign In" : "Sign Up"}
                </Link>
            </p>
        </div>
    </div>
  )
}
export default AuthForm