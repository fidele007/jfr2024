# Static JFR 2024

This project aims to provide free media content for the [JFR 2024](https://www.jfr.plus/jfr-2024/programme-2024) conference, available for everyone.

## Install Dependencies

```bash
npm install
```

## Upgrade All Dependencies (minor versions)

```bash
npm update
```
## Upgrade All Dependencies (major versions)

```bash
npx npm-check-updates
```

## Run DEV

```bash
npm run dev
```

## Generate Static Website

The following command is shorthand for `npm run build && npx gh-pages -d build -t true`

```bash
npm run gh-pages
```

## Tauri build

To build for ARM macOS

```bash
npm run tauri build -- --target aarch64-apple-darwin
```

To build for Intel macOS:

```bash
rustup target add x86_64-apple-darwin
npm run tauri build -- --target x86_64-apple-darwin
```

To build a universal app that runs on both Intel and ARM builds:

```bash
rustup target add x86_64-apple-darwin
npm run tauri build -- --target universal-apple-darwin
```