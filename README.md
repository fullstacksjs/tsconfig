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

## Usage

Add to your tsconfig.json:

```jsonc
{
  "extends": "@fullstacksjs/tsconfig/<preset>"
}
```

## Presets

| preset    | description   |
| --------- | ------------- |
| cjs       | CJS Codebase  |
| esm       | ESM Codebase  |
| lib       | TS Library    |
| react     | React App     |
| react-lib | React Library |


Feel free to use 💛

[logo]: https://raw.githubusercontent.com/fullstacksjs/tsconfig/master/assets/logo.svg
[download-badge]: https://img.shields.io/npm/dm/@fullstacksjs/tsconfig?color=6464E2&label=DOWNLOADS&style=flat-square
[version-badge]: https://img.shields.io/npm/v/@fullstacksjs/tsconfig?color=6464E2&label=VERSION&style=flat-square
[license-badge]: https://img.shields.io/npm/l/@fullstacksjs/tsconfig?color=6464E2&label=LICENSE&style=flat-square
[tsconfig]: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
