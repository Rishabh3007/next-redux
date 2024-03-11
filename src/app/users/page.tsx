"use client"
import { fetchUsers } from "@/lib/features/users/usersSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { RootState } from "@/lib/store";
import { useEffect } from "react";
import Link from "next/link";

export default function Users() {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state: RootState) => state.users.users);
    const loading = useAppSelector((state: RootState) => state.users.loading);
    const error = useAppSelector((state: RootState) => state.users.error);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <>
        <h1>Users</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        <Link href="/cake">
            Cake
        </Link>
        </>
    );
}