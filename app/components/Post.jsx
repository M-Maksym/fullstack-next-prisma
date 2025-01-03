import DeletePostButton from "./DeletePostButton";

export default function Post ({id, title, content, authorName}){
    return(
        <div style={{border:'1px solid white', borderRadius:'8px', padding:"10px"}}>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>Author: {authorName}</p>
            <DeletePostButton postId={id} />
        </div>
    )
}