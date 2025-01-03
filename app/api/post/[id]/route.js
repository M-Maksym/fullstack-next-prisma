import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, {params}){
    const postId = params.id;
    const post = await prisma.post.delete({where:{id: postId}});
    return NextResponse.json(post)
}