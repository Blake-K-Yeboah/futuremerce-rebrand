import { z, defineCollection } from 'astro:content';

const serviceCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    order: z.number(),
    cta: z.object({
      label: z.string(),
      link: z.string(),
    }).optional()
  }),
});

export const collections = {
  'services': serviceCollection,
};