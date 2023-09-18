import Badge from "./Badge";

function BlogCard(props) {
    return (
        <div className="blog-card">
            <img src="/src/assets/farm.png" width='100%' style={{borderRadius: '1rem'}}></img>
            <div className="blog-content">
                <Badge type={props.type}/>
                <h2>{props.title}</h2>
                <p>{props.subtitle}</p>
                <br/>
            </div>
        </div>
    );
}

export default BlogCard;
