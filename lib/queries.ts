import { groq } from "next-sanity";
import { getClient } from "./sanity.server";

export const getDownloadQuery = async () => {
  return await getClient().fetch(
    groq`*[_type == "free-resources"] {_id, name, link, description}`
  );
} 
