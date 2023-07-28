// To import the content dynamically,
import type { AstroComponentFactory } from "astro/dist/runtime/server";
import { getCollection, type CollectionEntry, getEntry } from "astro:content";

// ? we should add the type of the content here evreytime we add a new content
export type PageName = "home";
type headContent = "head";

export const getContent = async ({
  pageName,
  locale,
}: {
  pageName: PageName;
  locale: string;
}): Promise<AstroComponentFactory[]> => {
  const allContent = (
    await getCollection(pageName, (entry) => entry.id.includes(locale))
  ).sort((a, b) => a.data.order - b.data.order) as CollectionEntry<PageName>[];

  const mdxComponents = await Promise.all(
    allContent.map(async (content) => {
      try {
        const { Content } = await content.render();
        return Content;
      } catch (e) {
        console.log(e);
        return null;
      }
    })
  );

  return mdxComponents.filter(
    (component) => component !== null
  ) as AstroComponentFactory[];
};
