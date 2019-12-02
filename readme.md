# resolve-pkg-option


Returns a normalized node package representation by either specifying an object or a file path.



## Try it out
Open a browser's JavaScript console and execute:

```javascript
const scriptElement = document.createElement("script");
scriptElement.setAttribute("type","text/javascript");
scriptElement.setAttribute("src","https://unpkg.com/resolve-pkg-option@1.0.8");
document.querySelector("head").appendChild(scriptElement);
```

The module is now loaded in a variable.

```javascript
typeof resolve-pkg-option.default
```

## Documentation

* [resolve-pkg-option](#module_resolve-pkg-option)
    * [~default(pkg, options)](#module_resolve-pkg-option..default) ⇒ <code>Promise.&lt;result&gt;</code>
    * [~result](#module_resolve-pkg-option..result) : <code>object</code>
    * [~options](#module_resolve-pkg-option..options) : <code>object</code>

Loads a package.json or prepares given pkg data

**Kind**: inner method of [<code>resolve-pkg-option</code>](#module_resolve-pkg-option)  
**Returns**: <code>Promise.&lt;result&gt;</code> - Resolving result with package data and an optional file path
resolvePkgOption({name: " test"})
// { path: false, pkg: {name: "test"} }  

| Param | Type | Description |
| --- | --- | --- |
| pkg | <code>object</code> \| <code>string</code> | Either a path where the package.json is searched at, or pkg data as an object |
| options | <code>options</code> | Resolving options |

**Example**  
```javascript
resolvePkgOption({name: " test"}, {normalize: false})
// { path: false, pkg: {name: " test"} }
```
**Kind**: inner typedef of [<code>resolve-pkg-option</code>](#module_resolve-pkg-option)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pkg | <code>object</code> | The final pkg data |
| path | <code>string</code> \| <code>false</code> | The file path where the pkg data got loaded from |

**Kind**: inner typedef of [<code>resolve-pkg-option</code>](#module_resolve-pkg-option)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [normalize] | <code>boolean</code> | <code>true</code> | Apply normalize-package-data |
| [json5] | <code>boolean</code> | <code>true</code> | Parse package.json with json5 |
| [preventDependencyCopy] | <code>boolean</code> | <code>true</code> | Prevents `pkg.optionalDependencies` from getting copied to `pkg.dependencies` by normalize-package-data, see: https://github.com/npm/normalize-package-data/issues/91 |



## License
```text
MIT License

Copyright © 2019, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
