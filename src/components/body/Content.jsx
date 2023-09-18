import { useState } from "react";
import BlogCard from "./BlogCard";
import Hero from "./Hero";

function Content() {
    const [blogCards, updateBlogCards] = useState([]);

    return (
        <main>
            <Hero />
            <div className="blog-entries">
                <BlogCard
                    title="A Blog Title"
                    subtitle="Some brief description of the post"
                    type={0}
                />

                <BlogCard
                    title="A Blog Title"
                    subtitle="Some brief description of the post"
                    type={1}
                />

                <BlogCard
                    title="A Blog Title"
                    subtitle="Some brief description of the post"
                    type={2}
                />
                <BlogCard
                    title="A Blog Title"
                    subtitle="Some brief description of the post"
                    type={3}
                />
            </div>
        </main>
    );
}

export default Content;
