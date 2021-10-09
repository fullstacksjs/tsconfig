<div align="center">

![logo][logo]

<br/>

![download status][download-badge]
![version][version-badge]
![MIT License][license-badge]

</div>

Shared [TypeScript config][tsconfig] for community projects.

## Installation

### npm :

```sh
$ npm install --save-dev @fullstacksjs/tsconfig typescript
```

### yarn :

```sh
$ yarn add --dev @fullstacksjs/tsconfig typescript
```

## Usage

Add to your tsconfig.json:

```json
{
  "extends": "@fullstacksjs/tsconfig",
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

## Configs

* NodeJS CommonJS:

```jsonc
{
  "extends": "@fullstacksjs/tsconfig"
}
```

* NodeJS ESM Library

```jsonc
{
  "extends": "@fullstacksjs/tsconfig/esm.json"
}
```

* React App:

```jsonc
{
  "extends": "@fullstacksjs/tsconfig/react.json"
}
```

* React library:

```jsonc
{
  "extends": "@fullstacksjs/tsconfig/react-lib.json"
}
```

Feel free to use 💛

[logo]: https://raw.githubusercontent.com/fullstacksjs/tsconfig/master/assets/logo.svg
[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/tsconfig?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/tsconfig?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/tsconfig?color=6464E2&label=LICENSE&style=flat-square
[tsconfig]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
