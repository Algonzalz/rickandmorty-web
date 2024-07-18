'use client'
import { useRouter } from "next/navigation";
import { ArrowRightToLine } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export const Logout = () => {

    const router = useRouter();
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="rickandmorty" size="icon">
                    <ArrowRightToLine className="h-4 w-4" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Esta Seguro que desea salir?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Se cerrará la sesión al salir del sistema
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => router.push('/login')}>Cerrar sesión</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
