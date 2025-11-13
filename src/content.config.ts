import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}),
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) => {
		const media = z.object({
			type: z.enum(['video', 'image']).default('video'),
			src: z.string(),
			poster: image().optional(),
			alt: z.string().optional(),
		});

		return z.object({
			title: z.string(),
			description: z.string(),
			summary: z.string(),
			genre: z.string(),
			status: z.string(),
			role: z.string(),
			engines: z.array(z.string()).min(1),
			platforms: z.array(z.string()).min(1),
			tech: z.array(z.string()).min(1),
			featured: z.boolean().default(false),
			order: z.number().default(0),
			cardMedia: media,
			heroMedia: media.optional(),
			gallery: z.array(media).optional(),
			lessons: z.array(z.string()).optional(),
			cta: z
				.object({
					play: z.string().url().optional(),
					itch: z.string().url().optional(),
					code: z.string().url().optional(),
				})
				.optional(),
		});
	},
});

export const collections = { blog, projects };
