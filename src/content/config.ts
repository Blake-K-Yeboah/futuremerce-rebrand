import { z, defineCollection } from "astro:content";

const serviceCollection = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        order: z.number(),
        shortDescription: z.string(),
        cta: z
            .object({
                label: z.string(),
                link: z.string(),
            })
            .optional(),
    }),
});

const faqCollection = defineCollection({
    type: "data",
    schema: z.object({
        question: z.string(),
        answer: z.string(),
        type: z.string(),
        homepage: z.boolean().optional(),
    }),
});

export const collections = {
    services: serviceCollection,
    faqs: faqCollection,
};
