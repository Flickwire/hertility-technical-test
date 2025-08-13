import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Result } from "./Result";
import { ResultData } from "@/types/ResultData";

export const Results = ({ results }: { results: ResultData[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">result id</TableHead>
          <TableHead className="text-center">user id</TableHead>
          <TableHead className="text-center">status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {results.map((result) => (
          <Result id={result.id} userId={result.userId} />
        ))}
      </TableBody>
    </Table>
  );
};
