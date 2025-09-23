import { contentfulClient } from "./contentful";
import type { Tecnologias } from "./types";

export const entries = await contentfulClient.getEntries<Tecnologias>({
  content_type: "tecnologias",
});
