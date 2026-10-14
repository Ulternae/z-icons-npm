# Security policy

## Reporting a vulnerability

For a vulnerability in `@zcorvus/icons`, `@zcorvus/icons-react`, or their build and release tooling, use **Report a vulnerability** in the repository's [Security tab](https://github.com/Ulternae/z-icons-npm/security) when private vulnerability reporting is available.

If that option is unavailable, open an issue titled **Request for private security contact** without exploit details, credentials, or sensitive data. The maintainer will arrange a private reporting channel.

Include the affected package and version, environment, minimal reproduction, expected security boundary, and potential impact. Use a reproduction without real credentials or personal data. The primary maintainer is [@Ulternae](https://github.com/Ulternae). Response times depend on maintainer availability; there is no guaranteed response schedule.

## Version policy

The current development line is v3, distributed under npm's `beta` tag. Security fixes are prioritized for the current development line. Reports affecting the legacy `0.1.x` packages will be reviewed for applicability; backports are considered individually. The v2 `0.2.0` prototype was not published.

Beta APIs can change between prereleases. Read the [changelog](CHANGELOG.md) and [release guide](docs/releasing.md) when upgrading.

## SVG trust boundary

`renderSvg` renders trusted, generated definitions and escapes supplied attribute values. It does not sanitize an arbitrary SVG body. The Web Component renders those definitions into the DOM. Applications must not pass SVG markup from untrusted users or remote sources as icon definitions.

Icon source contributions and changes to SVG parsing, generated code, package exports, dependency versions, and release tooling deserve careful review. Source artwork must also carry appropriate license and attribution information.

## Scope

This policy covers this repository and its two npm packages. For issues in upstream artwork or third-party dependencies, identify the upstream project in the report so maintainers can coordinate a fix. Security concerns involving the separate ZCorvus website should be directed to that application's maintainer.
