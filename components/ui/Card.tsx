import { ReactNode } from "react";

export default function Card(
{
    children
}:
{
    children: ReactNode
}
){

    return(

        <div
            className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-6
            shadow-xl
            hover:border-purple-500/40
            duration-300
            "
        >

            {children}

        </div>

    );

}