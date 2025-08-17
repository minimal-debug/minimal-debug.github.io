// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://minimal-debug.github.io/',
	integrations: [
		starlight({
			title: 'minimal-debug',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/aldipiroli' }, { icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@MinimalDebug' }],
			sidebar: [
				{
					label: 'Explained Papers',
					autogenerate: { directory: 'papers' },

				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
			],
			pagination: false,
			lastUpdated: false
		}),
	],
});
