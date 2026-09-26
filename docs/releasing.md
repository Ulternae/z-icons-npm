# Releasing packages

Releases are intentionally manual. The GitHub `Release package` workflow validates the full workspace and then publishes one selected package through npm trusted publishing (OIDC).

## One-time setup

1. Create an npm trusted publisher for each public package that points to `.github/workflows/release.yml`.
2. Create a protected GitHub environment named `npm` and require maintainer approval.
3. Confirm that `pnpm run licenses:sync` reports both packages as up to date. Both are MIT licensed and publish the original Myna UI Icons MIT notice.

The v3 release matrix is:

```text
@zcorvus/icons
@zcorvus/icons-react
```

The legacy pack packages and `@zcorvus/icons-web` are no longer built from this repository. Removing their source directories does not unpublish previously released npm versions; any published versions should receive migration guidance rather than being unpublished.

## Release procedure

1. Update the selected package version in the same pull request. Keep both on the same v3 prerelease version when releasing them together.
2. Run `pnpm run check:fast` locally.
3. Let CI run the full build, typecheck, tests, generated-output check, and tarball validation.
4. Merge the pull request.
5. Manually run `Release package`, select `icons` or `icons-react` and the npm dist-tag (`beta` by default), and approve the `npm` environment deployment.

The workflow has no long-lived npm token. npm derives a short-lived credential from GitHub OIDC and publishes provenance when the repository and package configuration support it.
