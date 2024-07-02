declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"en": {
"about/about.md": {
	id: "about/about.md";
  slug: "about/about";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"blogs/home-mmouzo.md": {
	id: "blogs/home-mmouzo.md";
  slug: "blogs/home-mmouzo";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"certificates/1samsung.md": {
	id: "certificates/1samsung.md";
  slug: "certificates/1samsung";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"certificates/2oracleIn.md": {
	id: "certificates/2oracleIn.md";
  slug: "certificates/2oraclein";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"certificates/3oracleIA.md": {
	id: "certificates/3oracleIA.md";
  slug: "certificates/3oracleia";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"certificates/4oracledbf.md": {
	id: "certificates/4oracledbf.md";
  slug: "certificates/4oracledbf";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"certificates/5ccnair.md": {
	id: "certificates/5ccnair.md";
  slug: "certificates/5ccnair";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"certificates/6ccnars.md": {
	id: "certificates/6ccnars.md";
  slug: "certificates/6ccnars";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"certificates/7teachart.md": {
	id: "certificates/7teachart.md";
  slug: "certificates/7teachart";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"contact/CV.md": {
	id: "contact/CV.md";
  slug: "contact/cv";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"contact/email.md": {
	id: "contact/email.md";
  slug: "contact/email";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"contact/github.md": {
	id: "contact/github.md";
  slug: "contact/github";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"contact/linkedin.md": {
	id: "contact/linkedin.md";
  slug: "contact/linkedin";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"contact/telegram.md": {
	id: "contact/telegram.md";
  slug: "contact/telegram";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"contact/whatsapp.md": {
	id: "contact/whatsapp.md";
  slug: "contact/whatsapp";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"projects/1rolula.md": {
	id: "projects/1rolula.md";
  slug: "projects/1rolula";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"projects/2oracle.md": {
	id: "projects/2oracle.md";
  slug: "projects/2oracle";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"projects/3uetc.md": {
	id: "projects/3uetc.md";
  slug: "projects/3uetc";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"projects/4cfe.md": {
	id: "projects/4cfe.md";
  slug: "projects/4cfe";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"projects/5vrtolerance.md": {
	id: "projects/5vrtolerance.md";
  slug: "projects/5vrtolerance";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"projects/6ar.md": {
	id: "projects/6ar.md";
  slug: "projects/6ar";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"projects/7votacion.md": {
	id: "projects/7votacion.md";
  slug: "projects/7votacion";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"studies/studie1.md": {
	id: "studies/studie1.md";
  slug: "studies/studie1";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"studies/studie2.md": {
	id: "studies/studie2.md";
  slug: "studies/studie2";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"titles.md": {
	id: "titles.md";
  slug: "titles";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"works/work1.md": {
	id: "works/work1.md";
  slug: "works/work1";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"works/work2.md": {
	id: "works/work2.md";
  slug: "works/work2";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
"works/work3.md": {
	id: "works/work3.md";
  slug: "works/work3";
  body: string;
  collection: "en";
  data: any
} & { render(): Render[".md"] };
};
"es": {
"about/about.md": {
	id: "about/about.md";
  slug: "about/about";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"blogs/home-mmouzo.md": {
	id: "blogs/home-mmouzo.md";
  slug: "blogs/home-mmouzo";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"certificates/1samsung.md": {
	id: "certificates/1samsung.md";
  slug: "certificates/1samsung";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"certificates/2oracleIn.md": {
	id: "certificates/2oracleIn.md";
  slug: "certificates/2oraclein";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"certificates/3oracleIA.md": {
	id: "certificates/3oracleIA.md";
  slug: "certificates/3oracleia";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"certificates/4oracledbf.md": {
	id: "certificates/4oracledbf.md";
  slug: "certificates/4oracledbf";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"certificates/5ccnair.md": {
	id: "certificates/5ccnair.md";
  slug: "certificates/5ccnair";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"certificates/6ccnars.md": {
	id: "certificates/6ccnars.md";
  slug: "certificates/6ccnars";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"certificates/7teachart.md": {
	id: "certificates/7teachart.md";
  slug: "certificates/7teachart";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"contact/CV.md": {
	id: "contact/CV.md";
  slug: "contact/cv";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"contact/email.md": {
	id: "contact/email.md";
  slug: "contact/email";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"contact/github.md": {
	id: "contact/github.md";
  slug: "contact/github";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"contact/linkedin.md": {
	id: "contact/linkedin.md";
  slug: "contact/linkedin";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"contact/telegram.md": {
	id: "contact/telegram.md";
  slug: "contact/telegram";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"contact/whatsapp.md": {
	id: "contact/whatsapp.md";
  slug: "contact/whatsapp";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"projects/1rolula.md": {
	id: "projects/1rolula.md";
  slug: "projects/1rolula";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"projects/2oracle.md": {
	id: "projects/2oracle.md";
  slug: "projects/2oracle";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"projects/3uetc.md": {
	id: "projects/3uetc.md";
  slug: "projects/3uetc";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"projects/4cfe.md": {
	id: "projects/4cfe.md";
  slug: "projects/4cfe";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"projects/5vrtolerance.md": {
	id: "projects/5vrtolerance.md";
  slug: "projects/5vrtolerance";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"projects/6ar.md": {
	id: "projects/6ar.md";
  slug: "projects/6ar";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"projects/7votacion.md": {
	id: "projects/7votacion.md";
  slug: "projects/7votacion";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"studies/studie1.md": {
	id: "studies/studie1.md";
  slug: "studies/studie1";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"studies/studie2.md": {
	id: "studies/studie2.md";
  slug: "studies/studie2";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"titles.md": {
	id: "titles.md";
  slug: "titles";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"works/work1.md": {
	id: "works/work1.md";
  slug: "works/work1";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"works/work2.md": {
	id: "works/work2.md";
  slug: "works/work2";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
"works/work3.md": {
	id: "works/work3.md";
  slug: "works/work3";
  body: string;
  collection: "es";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
