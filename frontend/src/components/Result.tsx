import { TableCell, TableRow } from "@/components/ui/table";

export const Result = ({ id, userId }: { id: number; userId: number }) => {
  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{userId}</TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};
