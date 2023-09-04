import Badge from "./Badge";

function BlogCard(props) {
    return (
        <div className="blog-card">
            <img src="/src/assets/arena.png"></img>
            <div className="blog-content">
                <Badge type={0}/>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
}

export default BlogCard;
