"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CreateProduct() {
  function formSubmit() {}

  const formReturn = {
    name: "",
    description: "",
    price: 0,
    status: "active",
    image: "",
  };

  return (
    <>
      <form>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/products">
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-bold tracking-tight">Créer un produit</h1>
        </div>

        <Card className="max-w-7xl mx-auto mt-8">
          <CardHeader>
            <CardTitle>Détails</CardTitle>
            <CardDescription>
              Créez un produit avec les informations ci-dessous.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label>Nom</Label>
                <Input
                  type="text"
                  className="w-full"
                  placeholder="Nom du produit"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Description</Label>
                <Textarea
                  className="w-full"
                  placeholder="Description du produit..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Prix</Label>
                <Input type="number" className="w-full" placeholder="50 €" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Produits associés</Label>
                <Switch />
              </div>
              <div className="flex flex-col gap-3">
                <Label>Statut</Label>
                <Select>
                  <SelectTrigger className="w-[280px]">
                    <SelectValue placeholder="Sélectionner le statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Actif</SelectItem>
                    <SelectItem value="inactive">Inactif</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label>Image</Label>
                <Input type="file" className="w-full" />
              </div>
              <div className="flex flex-row justify-end">
                <Button type="submit" className="w-32">
                  Créer
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </form>
    </>
  );
}
