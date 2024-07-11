import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MoreHorizontal,
  Pencil,
  PlusCircle,
  Trash2,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

export default function Products() {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-2">
          <Link href="/dashboard/products/create">
            <PlusCircle className="w-4 h-4" />
            Ajouter un produit
          </Link>
        </Button>
      </div>

      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Liste des produits</CardTitle>
        </CardHeader>
        <CardDescription>
          Vous retrouverez ici la liste de tous les produits de votre
          entreprise.
        </CardDescription>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-20">Image</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <UserIcon className="w-10 h-10" />
                </TableCell>
                <TableCell>
                  <p>Pack vapoteur</p>
                </TableCell>
                <TableCell>
                  <p>Actif</p>
                </TableCell>
                <TableCell>
                  <p>10</p>
                </TableCell>
                <TableCell>
                  <p>78,99 €</p>
                </TableCell>
                <TableCell>
                  <p>Description du produit</p>
                </TableCell>
                <TableCell className="text-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild className="gap-2">
                        <Link href="/dashboard/products/1/edit">
                          <Pencil className="w-4 h-4" />
                          Modifier
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild className="gap-2">
                        <Link href="/dashboard/products/1/delete">
                          <Trash2 className="w-4 h-4" />
                          Supprimer
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
