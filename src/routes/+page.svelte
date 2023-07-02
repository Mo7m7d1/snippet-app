<script lang="ts">
	import { addSnippet, snippetStore } from "../SnippetStore";
	import CodeSnippetCard from "../components/CodeSnippetCard.svelte";
	import { validateData } from "../helpers/validateData";

	const formData: CodeSnippetInput = {
		title: "",
		language: "html",
		description: ""
	};

	const submitSnippet = () => {
		if (!formData.title || !formData.language || !formData.description) {
      		alert('Please fill in all the fields.');
      		return;
    	}

		if(!validateData(formData)) return;


		addSnippet(formData);
	}

	snippetStore.set([{
		title: "Example",
		language: "JS",
		description: "const text = 'Hello, World';\nconsole.log(text);",
		favorite: false
	}]);
</script>

<main class="flex justify-center items-center m-10">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center text-lg font-semibold py-3">Create A Code Snippet</h3>
		<section class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Title</span>
				<input type="text" class="input" placeholder="Enter title" bind:value={formData.title} required/>
			</label>
			<label class="label">
				<span>Programming language</span>
				<select class="select" bind:value={formData.language} required>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="js">JS</option>
					<option value="ts">TS</option>
					<option value="c++">C++</option>
					<option value="php">PHP</option>
					<option value="c#">C#</option>
					<option value="rust">RUST</option>
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea class="textarea" rows="4" placeholder="Enter the snippet code here..." bind:value={formData.description} required/>
			</label>

			<button class="btn btn-md variant-filled-secondary" type="button" on:click={submitSnippet}>Create Snippet</button>
		</section>

		<section class="text-center py-6 text-lg font-semibold">
			<h2>My Code Snippets</h2>
		</section>

		{#each $snippetStore as snippet, index}
			 <CodeSnippetCard {snippet} {index}/>
		{/each}
	</div>
</main>
