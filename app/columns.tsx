"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image"; // used to optimize all the images in our app, it is automatically caching them too

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

// This type is used to define the shape of our data.

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "avatar",
    header: () => <div className="text-left">Avatar</div>, // we can change header of each column to add functionality if we need
    cell: ({ row }) => {
      const avatar = row.original.avatar;

      return (
        <div className="relative flex h-10 w-10 shrink-0 overflow-hidden overflow-hidden rounded-full rounded-full">
          <Image
            className="aspect-square h-full w-full"
            loader={() => avatar + "?w=100"}
            src={avatar}
            width={1000}
            height={1000}
            alt="avatar-image"
          />
        </div>
      );
    },
  },

  {
    accessorKey: "first_name",
    header: "First name",
  },

  {
    accessorKey: "last_name",
    header: "Last name",
  },

  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} //This will automatically sort the table
          //(ascending and descending) when user toggles on the header cell.Email
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 ">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.email)}
            >
              Copy email of user
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Do something 1</DropdownMenuItem>
            <DropdownMenuItem>Do something 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
