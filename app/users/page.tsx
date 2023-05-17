import { TableCaption, TableHead, TableRow } from "@components/ui/table";
import { Table } from "lucide-react";
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function getData() {
  const res = await fetch("https://reqres.in/api/users/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="container mx-auto py-10 w">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
