import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import { Link } from "@inertiajs/react";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
            <PrimaryButton className="w-40 mb-8">
                <Link href={route("admin.dashboard.movie.create")}>
                    Insert New Movie
                </Link>
            </PrimaryButton>
            {flashMessage?.message && <FlashMessage message={flashMessage.message} />}
        </Authenticated>
    );
}
