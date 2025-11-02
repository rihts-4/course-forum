"use client";

import { Authenticated, Unauthenticated } from "convex/react";
import { UserButton, RedirectToSignIn } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Home() {
    return (
        <>
            <Authenticated>
                <UserButton />
                <Content />
            </Authenticated>
            <Unauthenticated>
                <RedirectToSignIn />
            </Unauthenticated>
        </>
    );
}

function Content() {
    const messages = useQuery(api.messages.getForCurrentUser);
    return <div>Authenticated content: {messages?.length}</div>;
}
