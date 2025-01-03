'use client'
import { useRouter } from "next/navigation"

export default function DeletePostButton({postId}){
    const router = useRouter();

    const handleClick = async () => {
        try{
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE'
            })  
            router.refresh();
        }catch(e){
            console.error(e)
        }

    }
    return (
        <button onClick={handleClick}>Delete post</button>
    )
}