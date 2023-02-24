# luns aka. lowercase uppercase number special

Zero depency "hash" or "uuid" string generator

Created for personal need to have `for` and `name` for input to be unique and same for both. Like vue computed or svelte prop for inputGroup.

Just create your own patterns with it like so

```js
const lunsId = [4, 8, 4].map((i) => luns({ count: i })).join('-') // ex. as2A-Jbcg34_f-Pp5l
```

Or maybe prefix it to handle radio inputs

```js
const lunsId = luns({count: 6, prefix: 'radio-'}) // ex. radio-1A4gln
```

```js
const lunsId = luns({include: 'ln'}) // only lowercase and numbers 1a410ghl09
```

Size is probably not gonna be problem should be in bytes range after minification

No guarantees that it will be unique as its based on `Math.random()` so use it with you own discretion.