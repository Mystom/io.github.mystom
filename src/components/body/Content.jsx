import { useState } from "react";
import BlogCard from "./BlogCard";

function Content() {
    const [blogCards, updateBlogCards] = useState([]);

    return (
        <main>
            <div className="bg-image"></div>
            <div className="blog-entries">
                <BlogCard
                    title="A Blog Title"
                    subtitle="Some brief description of the post"
                    type="Update"
                />

                <BlogCard
                    title="A Blog Title"
                    subtitle="Some brief description of the post"
                    type="Bug Fix"
                />

                <BlogCard
                    title="A Blog Title"
                    subtitle="Some brief description of the post"
                    type="Change"
                />
            </div>
        </main>
    );
}

export default Content;
