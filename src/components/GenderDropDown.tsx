import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import React from 'react'
import { Genders } from "../../type";

const GenderDropDown = async() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const options:RequestInit={
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_KEY}`,
        },
        next:{
            revalidate: 60 * 60 * 24,
        },
    };

    const response = await fetch(url, options);
    const data = (await response.json()) as Genders;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
            className="text-white flex items-center text-sm font-medium">
                Gender <ChevronDown className="ml-1" size={20}/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select a gender</DropdownMenuLabel>
                <DropdownMenuSeparator />
                { data?.genres?.map((gender) => (
                    <DropdownMenuItem key={gender?.id}>
                        <Link href={`/gender/${gender?.id}?gender=${gender.name}`}>
                            { gender?.name }
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    ) 
}

export default GenderDropDown