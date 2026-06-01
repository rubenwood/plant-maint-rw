import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function PlantCard() {
    return(
        <Card>
            <CardHeader>
                <CardTitle>Plant Name</CardTitle>
                <CardDescription>Description of the plant</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Additional information about the plant.</p>
            </CardContent>
        </Card>
    );
}