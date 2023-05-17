"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

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
    header: () => <div className="text-left">Avatar</div>,
    cell: ({ row }) => {
      const avatar = row.original.avatar;

      return (
        <div className="rounded-full relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full overflow-hidden">
          <Image
            className="aspect-square h-full w-full"
            loader={() => avatar}
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
    header: "Email",
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
            <DropdownMenuItem>Update user</DropdownMenuItem>
            <DropdownMenuItem>Delete user</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
