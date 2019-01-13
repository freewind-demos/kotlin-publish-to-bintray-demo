Kotlin Publish to Bintray Demo
==============================

Kotlin project publishes to jcenter/bintray.

Modify names when copy this project
-----------------------------------

- `README.md`
- `build.gradle`

Modify version before publishing
--------------------------------

- `README.md`
- `build.gradle`

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

If it is successful, open <https://dl.bintray.com/freewind/maven/> to check.

How to use the published package
-----------------------------------

When the package is published to bintray, we can use it in `build.gradle`:

```
repositories {
    maven {
        url 'https://dl.bintray.com/freewind/maven/'
    }
}

dependencies {
    compile 'kotlin-demos:kotlin-publish-to-bintray-demo:0.1.0'
}
```
