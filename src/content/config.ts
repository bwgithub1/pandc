import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    sectionClass: z.string().optional(),
  }),
});

export const collections = {
  pages,
};
