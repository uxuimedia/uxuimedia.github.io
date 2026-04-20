import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({  
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/portfolio" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    image: image(), 
    category: z.string().optional(),
  }),
});

export const collections = { portfolio };
