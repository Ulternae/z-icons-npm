# Releasing packages

Releases are intentionally manual. The GitHub `Release package` workflow validates the full workspace and then publishes one selected package through npm trusted publishing (OIDC).

## One-time setup

1. Create an npm trusted publisher for each public package that points to `.github/workflows/release.yml`.
2. Create a protected GitHub environment named `npm` and require maintainer approval.
3. Confirm that `pnpm run licenses:sync` reports every package as up to date. All packages are MIT licensed; packages containing Mina icons also publish the original Myna UI Icons MIT notice.

`@zcorvus/icons` is no longer built or published from version 0.2 onward. Existing npm versions should be deprecated with migration guidance rather than unpublished. `@zcorvus/core-solid-react` and `@zcorvus/core-regular-duo-react` are replaced by the combined `@zcorvus/core-react` package.

The public package matrix is:

```txt
@zcorvus/icons-react
@zcorvus/icons-web
@zcorvus/core-react
@zcorvus/neo-react
@zcorvus/mina-react
@zcorvus/bru-react
@zcorvus/lan-react-light
@zcorvus/lan-react-regular
@zcorvus/lan-react-solid
@zcorvus/lan-react-thin
```

## Release procedure

1. Update the selected package version in the same pull request.
2. Run `pnpm run check:fast` locally.
3. Let CI run the full build, typecheck, tests, generated-output check, and tarball validation.
4. Merge the pull request.
5. Manually run `Release package`, select the package and npm dist-tag, and approve the `npm` environment deployment.

The workflow has no long-lived npm token. npm derives a short-lived credential from GitHub OIDC and publishes provenance when the repository and package configuration support it.
