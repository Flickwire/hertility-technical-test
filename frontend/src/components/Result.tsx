import { TableCell, TableRow } from "@/components/ui/table";
import { ResultData } from "@/types/ResultData";

export const Result = ({
  id,
  userId,
  normal,
}: Omit<ResultData, "hormoneResults">) => {
  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{userId}</TableCell>
      <TableCell className="font-medium">
        {typeof normal !== "undefined" &&
          (normal ? (
            <span className="text-green-800 dark:text-green-500">IN RANGE</span>
          ) : (
            <span className="text-red-800 dark:text-red-500">NOT IN RANGE</span>
          ))}
      </TableCell>
    </TableRow>
  );
};
