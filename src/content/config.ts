import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// import { i18nSchema } from '@schemas/i18n';
// import { contentSchema } from '@schemas/content';
// import { HeadConfigSchema } from '@schemas/head';
export const collections = {
  content: defineCollection({
    schema: z.object({
      /** The title of the current page. Required. */
      title: z.string(),
      /**
       * A short description of the current page’s content. Optional, but recommended.
       * A good description is 150–160 characters long and outlines the key content
       * of the page in a clear and engaging way.
       */
      description: z.string().optional(),
      /**
       * array of tags to be used for the content
       */
      tags: z.array(z.string()).optional(),
      /**
       * order of the content in the list
       *  TODO: make it required
       * */
      order: z.number().min(-1).optional().default(-1),
    }),
  }),
};
