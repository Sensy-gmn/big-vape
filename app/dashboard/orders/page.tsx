import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrdersPage() {
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Commandes</CardTitle>
        <CardDescription>Voir toutes les commandes</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Facture</TableHead>
              <TableHead className="text-left">Client</TableHead>
              <TableHead className="text-left">Statut</TableHead>
              <TableHead className="text-left">Date</TableHead>
              <TableHead className="text-left">Paiement</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <p className="font-bold text-sm">1</p>
              </TableCell>
              <TableCell>
                <p className="font-bold text-sm">Alexandre Goumain</p>
                <p className="text-sm">alexandre.goumain@gmail.com</p>
              </TableCell>
              <TableCell>
                <p className="font-bold text-sm">En attente</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">01/01/2021</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">Carte bancaire</p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-right">100€</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="font-bold text-sm">2</p>
              </TableCell>
              <TableCell>
                <p className="font-bold text-sm">Alexandre Goumain</p>
                <p className="text-sm">alexandre.goumain@gmail.com</p>
              </TableCell>
              <TableCell>
                <p className="font-bold text-sm">Payé</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">01/01/2021</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">Virement bancaire</p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-right">475€</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="font-bold text-sm">3</p>
              </TableCell>
              <TableCell>
                <p className="font-bold text-sm">Alexandre Goumain</p>
                <p className="text-sm">alexandre.goumain@gmail.com</p>
              </TableCell>
              <TableCell>
                <p className="font-bold text-sm">Annulé</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">01/01/2021</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">Paypal</p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-right">100€</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <p className="font-bold text-sm">4</p>
              </TableCell>
              <TableCell>
                <p className="font-bold text-sm">Alexandre Goumain</p>
                <p className="text-sm">alexandre.goumain@gmail.com</p>
              </TableCell>
              <TableCell>
                <p className="font-bold text-sm">En attente</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">01/01/2021</p>
              </TableCell>
              <TableCell>
                <p className="text-sm">Carte bancaire</p>
              </TableCell>
              <TableCell>
                <p className="text-sm text-right">100€</p>
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter className="">
            <TableRow>
              <TableCell>
                <p className="text-sm">Total</p>
              </TableCell>
              <TableCell colSpan={4}></TableCell>
              <TableCell className="">
                <p className="text-sm font-bold text-right">500€</p>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
