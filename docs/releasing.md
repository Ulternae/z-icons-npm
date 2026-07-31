# Releasing packages

Releases are intentionally manual. The GitHub `Release package` workflow validates the full workspace and then publishes one selected package through npm trusted publishing (OIDC).

## One-time setup

1. Create an npm trusted publisher for each public package that points to `.github/workflows/release.yml`.
2. Create a protected GitHub environment named `npm` and require maintainer approval.
3. Decide and apply the project and icon-pack licenses. Packages currently remain `UNLICENSED` and the package check prints a warning until that decision is made.

`@zcorvus/icons` is a deprecated direct application API, but it remains the data dependency behind the adapters and may still need compatible releases. Applications should use pack-scoped wrappers such as `ZMina`, `ZLan`, `ZCore`, `ZNeo`, and `ZBru`.

## Release procedure

1. Update the selected package version and any internal dependency ranges in the same pull request.
2. Run `pnpm run check:fast` locally.
3. Let CI run the full build, typecheck, tests, generated-output check, and tarball validation.
4. Merge the pull request.
5. Manually run `Release package`, select the package and npm dist-tag, and approve the `npm` environment deployment.

The workflow has no long-lived npm token. npm derives a short-lived credential from GitHub OIDC and publishes provenance when the repository and package configuration support it.
