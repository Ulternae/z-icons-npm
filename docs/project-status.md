# Public project status

Snapshot checked on **2026-10-14**. These figures describe the public project at that time; refresh them before using them in an application or announcement.

## Published packages

| Package | npm latest tag | npm beta tag |
| --- | --- | --- |
| `@zcorvus/icons` | `0.1.9` | `3.0.0-beta.1` |
| `@zcorvus/icons-react` | `0.1.11` | `3.0.0-beta.1` |

Sources: [core registry metadata](https://registry.npmjs.org/@zcorvus%2Ficons) and [React registry metadata](https://registry.npmjs.org/@zcorvus%2Ficons-react).

Refresh tags with:

~~~bash
npm view @zcorvus/icons dist-tags --json --registry=https://registry.npmjs.org/ --prefer-online
npm view @zcorvus/icons-react dist-tags --json --registry=https://registry.npmjs.org/ --prefer-online
~~~

## npm downloads

The npm downloads API returned the following totals for **2026-09-13 through 2026-10-12**, inclusive:

| Package | Downloads |
| --- | ---: |
| `@zcorvus/icons` | 273 |
| `@zcorvus/icons-react` | 247 |

Sources: [core download count](https://api.npmjs.org/downloads/point/2026-09-13:2026-10-12/@zcorvus/icons) and [React download count](https://api.npmjs.org/downloads/point/2026-09-13:2026-10-12/@zcorvus/icons-react).

These are package downloads across all versions, including legacy releases. They do not measure unique users, active applications, or beta-version adoption. The totals should not be added together and presented as a user count.

## Public repository

The [GitHub repository API](https://api.github.com/repos/Ulternae/z-icons-npm) reported:

| Field | Value |
| --- | --- |
| Repository | `Ulternae/z-icons-npm` |
| Visibility | Public |
| License | MIT |
| Created | 2025-12-01 |
| Latest push reported | 2026-09-26T20:47:23Z |
| Stars | 0 |
| Forks | 0 |
| Open issues and pull requests reported | 0 |

The [GitHub releases API](https://api.github.com/repos/Ulternae/z-icons-npm/releases) returned no published releases when checked. npm publication and a GitHub release are separate records.

## Maintenance evidence

- Public source history includes the [v3 implementation](https://github.com/Ulternae/z-icons-npm/commit/26fb6dac8) and [beta release preparation](https://github.com/Ulternae/z-icons-npm/commit/68608e4c0).
- [CI](../.github/workflows/ci.yml) is configured to run generator checks, a full build, TypeScript checks, tests, generated-output verification, and tarball checks.
- [Publication](../.github/workflows/release.yml) is configured as a manual workflow using npm trusted publishing.
- Both packages include MIT licensing and the original [Myna UI attribution](../THIRD_PARTY_LICENSES.md).
- The source tree contains 19,833 SVG files across five packs, including variants. This count is not a measure of adoption.

Workflow configuration is evidence of the maintenance process, not a claim that a new validation run was performed for this documentation snapshot. Consult [Actions](https://github.com/Ulternae/z-icons-npm/actions) for individual run results.

The project is early in adoption. Its case for ecosystem value rests on its reusable APIs, publicly inspectable implementation, and maintenance work, rather than claims of widespread use.
