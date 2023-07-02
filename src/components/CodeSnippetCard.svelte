<script lang="ts">
	import { CodeBlock } from "@skeletonlabs/skeleton";
	import { deleteSnippet, toggleFavorite } from "../SnippetStore";

    export let snippet: CodeSnippet = {
        title: "",
        language: "",
        description: "",
        favorite: false
    };

    export let index: number;
</script>



<div class="card">
    <header class="card-header">
        {snippet.title}
        <div class="float-right">
            <button title="favorite" type="button" class="btn btn-sm variant-outline-success" on:click={() => toggleFavorite(index)}>
                {snippet.favorite ? "🌟" : "⭐"}
            </button>
            <button title="delete" type="button" class="btn btn-sm variant-outline-error" on:click={() => deleteSnippet(index)}>
                ❌
            </button>
        </div>
    </header>

    <section class="p-4">
        <CodeBlock language={snippet.language} code={snippet.description}/>
    </section>
</div>