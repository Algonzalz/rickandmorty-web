"use client"
import { useState } from "react"

import { RefreshCcw  } from "lucide-react";
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"

import { login } from "@/api/mockAuth"
import { useRouter } from "next/navigation";


interface Login{
	username: string,
	password: string
}
const formSchema = z.object({
	username: z.string()
	.min(2,{ message: "Mínimo 2 caracteres" })
	.max(20,{ message: "Máximo 20 caracteres" }).trim(),
	password: z.string()
	.min(2, { message: "Mínimo 2 caracteres" })
	.max(20,{ message: "Máximo 20 caracteres" }).trim(),
})

export default function Page() {

	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const { toast } = useToast()

	const handleLogin = async ({ username, password }: Login ) => {
		setLoading(true);
		try {
			const isLoggedIn = await login(username, password);
			if(isLoggedIn){
				router.push('dashboard/characters')
			}else{
				toast({
					variant: "destructive",
					title: "Error",
					description: "Usuario o contraseña Incorrecta",
				  })
			}
		} catch (error) {
			toast({
				variant: "destructive",
				title: "Error",
				description: "Error al realizar la solicitud",
			  })
		} finally{
			setLoading(false);
		}
	}

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	})

	function onSubmit(values: z.infer<typeof formSchema>) {
		handleLogin(values);
	}
	return (
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					{/* username */}

					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>

								<FormLabel>Usuario</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* password */}
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>

								<FormLabel>Contraseña</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button className="w-full" 
					type="submit"
					variant="rickandmorty"
					disabled={loading}>
						{loading &&  <RefreshCcw className="mr-2 h-4 w-4 animate-spin"/>}
						{loading ?  'Cargando...':'Iniciar sesión'}
						</Button>
				</form>
			</Form>
		</div>
	);
}