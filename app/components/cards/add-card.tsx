"use client";
import { Card, CardContent } from "@/components/ui/card";
import { BadgePlus } from "lucide-react";

import { addPlant } from "@/app/actions/add-plant";


async function onAddClicked() {
  try {
    const output = await addPlant();
    console.log("Plant added successfully", output);
  } catch (error) {
    console.error(error);
  }
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