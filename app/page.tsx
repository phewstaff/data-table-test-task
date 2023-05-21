import { DataTable } from "./data-table";
import { User, columns } from "./columns";
import { cookies } from "next/headers";
import { baseURL } from "@constants";

type Data = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

async function getData(): Promise<Data> {
  // Simulate a delay for 1 second to see if our skeleton loading works fine
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const res = await fetch(`${baseURL}users?page=1&per_page=12`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function UsersPage() {
  const data = await getData();
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return (
    <div className="w container mx-auto py-10">
      <DataTable columns={columns} data={data.data} token={token?.value} />
    </div>
  );
}
