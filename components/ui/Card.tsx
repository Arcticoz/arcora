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

        <div className="border rounded-xl p-6 shadow-md bg-white">

            {children}

        </div>

    );

}