import { TableCaption, TableHead, TableRow } from "@components/ui/table";
import { Table } from "lucide-react";
import { DataTable } from "./data-table";
import { User, columns } from "./columns";

type Data = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

async function getData(): Promise<Data> {
  const res = await fetch("https://reqres.in/api/users?page=1&per_page=12");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10 w">
      <DataTable columns={columns} data={data.data} />
    </div>
  );
}
