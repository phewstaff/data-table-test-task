import { User, columns } from "./columns";
import { DataTable } from "./data-table";

// here data-table used to pass in fake data and to render animated skeleton while our actual page is loading

export default function Loading() {
  const fakeData: User[] = [
    {
      id: 1,
      email: "FakeDataJustToFillInTheEmptySpace",
      first_name: "Magomed",
      last_name: "Naurbaev",
      avatar: "nrbv.m",
    },
    {
      id: 2,
      email: "FakeDataJustToFillInTheEmptySpace",
      first_name: "Magomed",
      last_name: "Naurbaev",
      avatar: "nrbv.m",
    },
    {
      id: 3,
      email: "FakeDataJustToFillInTheEmptySpace",
      first_name: "Magomed",
      last_name: "Naurbaev",
      avatar: "nrbv.m",
    },
    {
      id: 4,
      email: "FakeDataJustToFillInTheEmptySpace",
      first_name: "Magomed",
      last_name: "Naurbaev",
      avatar: "nrbv.m",
    },
    {
      id: 5,
      email: "FakeDataJustToFillInTheEmptySpace",
      first_name: "Magomed",
      last_name: "Naurbaev",
      avatar: "nrbv.m",
    },
    {
      id: 6,
      email: "FakeDataJustToFillInTheEmptySpace",
      first_name: "Magomed",
      last_name: "Naurbaev",
      avatar: "nrbv.m",
    },
    {
      id: 7,
      email: "FakeDataJustToFillInTheEmptySpace",
      first_name: "Magomed",
      last_name: "Naurbaev",
      avatar: "nrbv.m",
    },
  ];
  return (
    <div className="w container mx-auto py-10">
      <DataTable columns={columns} data={fakeData} skeleton={true} />
    </div>
  );
}
