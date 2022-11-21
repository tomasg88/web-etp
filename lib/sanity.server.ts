import { ClientConfig, createClient } from "next-sanity";
import { config } from "./sanity.config";

export const getClient = () => createClient(config as ClientConfig);