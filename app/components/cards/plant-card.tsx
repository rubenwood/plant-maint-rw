import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PlantCard({ plant }: { plant: any }) {
    return(
        <Card>
            <CardHeader>
                <CardTitle>{plant.name}</CardTitle>
                <CardDescription>{plant.short_descr}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{plant.descr}</p>
            </CardContent>
        </Card>
    );
}