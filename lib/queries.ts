import { groq } from "next-sanity";
import { getClient } from "./sanity.server";

export const getDownloads = async () => {
  return await getClient().fetch(
    groq`*[_type == "free-resources" && active == true] 
      {_id, name, link, description, cover, ctaButton}`
  );
} 
