"use client"
import { order, restock } from "@/lib/features/cake/cakeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import { RootState } from "@/lib/store";
import Link from "next/link";

export default function Cake() {
    const dispatch = useAppDispatch();
    const numOfCakes = useAppSelector((state: RootState) => state.cake.numOfCakes);
    return (
        <>
        <h1>Cake</h1>
        <h2>Number of cakes: {numOfCakes}</h2>
        <button onClick={() => dispatch(order(1))}>Order</button>
        <button onClick={() => dispatch(restock(1))}>Restock</button>
        <Link href="/users">
            Users
        </Link>
        </>
    );
}