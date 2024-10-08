import { posts } from "@/app/posts";
import path from "path";
import fs from 'fs';

export async function POST(request: Request) {
  const data = await request.formData();
  const postID = posts.length + 1;
  const postTitle = data.get("title")!.toString();
  const postSubject = data.get("subject")!.toString();
  const postCreationDate = Number(new Date());
  const postData = data.get("data")!.toString();
  
  const newPost = {
    id: postID,
    title: postTitle,
    subject: postSubject,
    created: postCreationDate,
    data: postData
  }
  
  const newPostList = [...posts, newPost];
  const filePath = path.join(process.cwd(), 'app', 'posts.ts');
  const fileContent = `export const posts = ${JSON.stringify(newPostList)};`;
  try {
    fs.writeFileSync(filePath, fileContent);
  } catch(error){
    console.log(error);
    return Response.json({error: error})
  }
  return Response.json({})
}
