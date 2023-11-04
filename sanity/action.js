import { client } from "./lib/client";
import { groq } from "next-sanity";


export const getProjects = async () => {


  try {
    

    const projects = await client.fetch(
      groq`*[_type == "project"] | order(date desc) {
        title,
        slug,
        summary,
        live,
        repo,
        date,
        "image": image.asset->url,
        "thumbnail": thumbnail.asset->url,
        category,
        tools,
      }`
    )

    return projects


  } catch (error) {
    console.log(error);
  }
}