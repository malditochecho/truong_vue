# Vite project

## create vue project

```powershell
yarn create vite
```

```powershell
yarn create v1.22.22
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...

success Installed "create-vite@6.1.1" with binaries:
    - create-vite
    - cva
✔ Project name: … projectname
✔ Select a framework: › Vue
✔ Select a variant: › JavaScript

Scaffolding project in /Users/sergio/desarrollo/tmp/projectname...

Done. Now run:

cd projectname
yarn
yarn dev

✨  Done in 11.45s.
```

## start app

```powershell
yarn dev
```

```powershell
$ vite

  VITE v6.0.11  ready in 233 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

# Vue concepts

### ref

Its possible to create a reactive variable that when its content is changed, all the references to it like `text interpolation` or `attribute binding` gets updated with the new value.
When use with `v-model` the value of the `v-model` can change the value of the `ref`, and viceversa.

```html
<script setup>
  import { ref } from "vue";
  const somevariable = ref("variable content");
</script>
```

### text interpolation

The value of a variable can be put inside the text content of an html element

```html
<p>{{ some variable}}</p>
```

### attribute binding

The value of a variable can be used in an html element's attribute as well with `v-bind`. It has a shortcut with `:` only too.

```html
<input v-bind:placeholder="somevariable" />
<input :placeholder="somevariable" />
```

### two way binding

Used to synchronize the current `value` of an `HTML element` with the value of a `ref` variable, in both ways.
It works with elements that has an attribute `value` like `input` (string), `textarea`, `select`, `checkbox` (boolean), `file input`, etc..

```html
<input v-model="somevariable" />
<input v-model="somevariable" />
<input v-model="somevariable" />
```

## vue directives

- `v-model`
- `v-bind`
- `v-if`
- `v-else`
- `v-for`
