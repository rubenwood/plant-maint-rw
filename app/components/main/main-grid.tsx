import { AddCard } from "../cards/add-card";
import { PlantCard } from "../cards/plant-card";

export function MainGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <AddCard />
        </div>
    );
}