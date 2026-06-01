"use client";
import { Card, CardContent } from "@/components/ui/card";
import { BadgePlus } from "lucide-react";


function onAddClicked(){
    console.log("Add card clicked");
}


export function AddCard() {
    return(
        <Card onClick={onAddClicked}>
            <CardContent className="flex flex-col p-6 items-center justify-center h-full">
                <BadgePlus className="m-12" size={40} />
                <p className="text-lg font-semibold">Add</p>
            </CardContent>
        </Card>
    );
}