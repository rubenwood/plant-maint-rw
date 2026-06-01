import { AddCard } from "../cards/add-card";
import { PlantCard } from "../cards/plant-card";
import { createClient } from "@/lib/supabase/server";

export async function MainGrid() {

    const supabase = await createClient();

    const { data: plants } = await supabase
        .from("plants")
        .select("*");

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {plants?.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
            ))}
            <AddCard />
        </div>
    );
}