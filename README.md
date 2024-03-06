# propCSS · ease-to-use SvelteKit CSS

`propCSS` is a SvelteKit / TypeScript library that allows you to manage CSS properties in a more JavaScript-friendly way. It provides a simple and intuitive API to manipulate CSS properties directly from your SvelteKit code.

## Usage

```svelte
<p use:propCSS={{ backgroundColor: 'red', color: 'white', paddingLeft: '2rem' }}>This is a test!</p>
```

CSS-Properties can be set using the `use:propCSS` directive. The directive takes an object as an argument, where the keys are the CSS properties and the values are their corresponding values.
Properties with hyphens (e.g. `background-color`) can be set using camelCase (e.g. `backgroundColor`).