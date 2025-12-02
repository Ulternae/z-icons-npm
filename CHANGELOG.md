# Changelog

All notable changes to this project will be documented in this file.

## [0.0.49] - 2025-12-02

### Added
- ⚛️ **React Component**: New typed React component for React/Next.js projects
  - Full TypeScript support with autocomplete for icon names
  - Export path: `@zcorvus/z-icons/react`
  - Props: `name`, `type`, `size`, `color`, `className`, `style`
- 📝 **TypeScript Types**: Exported `CoreIconName` and `NeoIconName` types
- 📚 **Documentation**:
  - Comprehensive React/Next.js usage examples
  - TypeScript guide (`TYPESCRIPT.md`)
  - Example file with advanced patterns (`examples/react-usage.tsx`)
- ⚙️ **Configuration Files**:
  - `tsconfig.json` for TypeScript compilation
  - `vite.config.example.js` for Vite integration

### Changed
- 📦 Updated package exports to include `./react` entry point
- 🔧 Enabled TypeScript declaration generation (`dts: true`)
- 📄 Updated README with React/Next.js usage instructions

### Dependencies
- Added `react` and `@types/react` as peer dependencies (optional)
- Marked as optional to support non-React usage

## [0.0.39] - 2025-12-02

### Fixed
- ⚠️ **Vite Compatibility**: Added documentation for required Vite configuration
  - Users must exclude the library from Vite's dependency optimization
  - Configuration: `optimizeDeps: { exclude: ['@zcorvus/z-icons'] }`

### Added
- 📚 Vite configuration example file
- ⚠️ Warning section in README about Vite requirements
- 🔍 Troubleshooting guide for common issues

### Changed
- Updated package description to mention Vite requirement

## [0.0.38] - Previous versions

Earlier versions focused on:
- SVG sprite generation
- Web Component implementation
- Core and Neo icon packs
- SVGO optimization
- Basic TypeScript definitions
