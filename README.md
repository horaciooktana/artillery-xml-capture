# XML/XPath support for Artillery

This is an optional dependency for Artillery to enable parsing and capturing XML in HTTP responses.

Install with:

```
npm install -g artillery-xml-capture
```

or if the installation of Artillery is local to a project:

```
npm install --save-dev artillery-xml-capture
```

## History

This code used be part of `artillery-core` but it has been extracted into a separate package, because of frequent build/installation problems with `libxmljs`.
