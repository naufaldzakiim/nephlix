import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const onHandleChange = (e) => {
        setData(
            e.target.name,
            e.target.type === "file" ? e.target.files[0] : e.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Create Movie" />
            <h1 className="text-xl">Insert a new Movie</h1>
            <hr className="mb-4" />
            <form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <InputLabel htmlFor="name" value="Name" />
                        <TextInput
                            type="text"
                            name="name"
                            placeholder="Enter the name of the movie"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            isError={errors.name}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="category" value="Category" />
                        <TextInput
                            type="text"
                            name="category"
                            placeholder="Enter the category of the movie"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            isError={errors.category}
                        />
                        <InputError message={errors.category} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="video_url" value="Video URL" />
                        <TextInput
                            type="url"
                            name="video_url"
                            placeholder="Enter the video url of the movie"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            isError={errors.video_url}
                        />
                        <InputError message={errors.video_url} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="thumbnail" value="Thumbnail" />
                        <TextInput
                            type="file"
                            name="thumbnail"
                            placeholder="Insert thumbnail of the movie"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            isError={errors.thumbnail}
                        />
                        <InputError message={errors.thumbnail} className="mt-2" />
                    </div>
                    <div>
                        <InputLabel htmlFor="rating" value="Rating" />
                        <TextInput
                            type="number"
                            name="rating"
                            placeholder="Enter the rating of the movie"
                            variant="primary-outline"
                            handleChange={onHandleChange}
                            isError={errors.rating}
                        />
                        <InputError message={errors.rating} className="mt-2" />
                    </div>
                    <div className="flex flex-row items-center gap-3">
                        <InputLabel htmlFor="is_featured" value="Is Featured" />
                        <Checkbox
                            name="is_featured"
                            onChange={(e) => {
                                setData(e.target.name, e.target.checked);
                            }}
                            variant="primary"
                            isError={errors.is_featured}
                            className="mb-2"
                        />
                        <InputError message={errors.is_featured} className="mt-2" />
                    </div>
                </div>
                <div className="mt-4">
                    <PrimaryButton className="w-32" type="submit" disabled={processing}>
                        Save
                    </PrimaryButton>
                </div>
            </form>
        </Authenticated>
    );
}
