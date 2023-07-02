import { writable } from "svelte/store";

export const snippetStore = writable<CodeSnippet[]>([]);

export const addSnippet = (snippet: CodeSnippetInput) => {
	snippetStore.update((snippets) => [
		{ ...snippet, favorite: false },
		...snippets,
	]);
};

export const deleteSnippet = (index: number) => {
	snippetStore.update((snippets) => snippets.splice(index, 1) && snippets);
};

export const toggleFavorite = (index: number) => {
	snippetStore.update((snippets) =>
		snippets.map((snippet, snippetIndex) =>
			index === snippetIndex
				? { ...snippet, favorite: !snippet.favorite }
				: snippet
		)
	);
};
