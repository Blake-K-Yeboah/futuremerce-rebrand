import { z, defineCollection, reference } from "astro:content";

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

const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        excerpt: z.string(),
        date: z.string(),
        category: z.string(),
        relatedPosts: z.array(reference("blog")).optional(),
    }),
});

export const collections = {
    services: serviceCollection,
    faqs: faqCollection,
    blog: blogCollection,
};
