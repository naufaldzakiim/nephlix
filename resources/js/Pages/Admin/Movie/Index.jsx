import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import PrimaryButton from "@/Components/PrimaryButton";
import FlashMessage from "@/Components/FlashMessage";
import { Link } from "@inertiajs/react";

export default function Index({ auth, flashMessage, movies }) {
    return (
        <Authenticated auth={auth}>
            <PrimaryButton className="w-40 mb-8">
                <Link href={route("admin.dashboard.movie.create")}>
                    Insert New Movie
                </Link>
            </PrimaryButton>
            {flashMessage?.message && <FlashMessage message={flashMessage.message} />}
            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    alt={movie.name}
                                    className="w-32 rounded-md"
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <PrimaryButton className="w-full" variant="warning">
                                    <Link href={route("admin.dashboard.movie.edit", movie.id)}>
                                        Edit
                                    </Link>
                                </PrimaryButton>
                            </td>
                            <td>
                                <PrimaryButton className="w-full" variant="danger">
                                    <Link href={route("admin.dashboard.movie.destroy", movie.id)}>
                                        Delete
                                    </Link>
                                </PrimaryButton>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
