Kotlin JS Publish Demo
======================

Kotlin-Js project, also publish to jcenter/bintray and npm.

Modify names when copy this project
-----------------------------------

- `README.md`
- `build.gradle`
- `generated/package.json`

Modify version before publishing
--------------------------------

- `README.md`
- `build.gradle`
- `generated/package.json`

Publish
-------

to maven local:

```
./gradlew install
```

to bintray:

```
./gradlew bintrayPublish
```

to npm:

```
cd generated
npm publish
```

Use
---

To use in `build.gradle`:

```
repositories {
    maven {
        url 'https://dl.bintray.com/freewind/maven/'
    }
}

dependencies {
    compile 'freewind.github.com:kotlin-js-publish-demo:0.1.0'
}
```

Also npm:

```
npm install --save kotlin-js-publish-demo
```


