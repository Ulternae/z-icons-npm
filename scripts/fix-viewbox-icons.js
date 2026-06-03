import fs from 'node:fs';
import path from 'node:path';
import { iconConfig } from './icon-config.js';

const DEFAULTS = {
  sourceRoot: iconConfig.sourceDir,
  minOverflow: 1,
  write: false,
};

const EPSILON = 0.001;
const TWO_PI = Math.PI * 2;

function parseArgs(argv) {
  const args = {
    ...DEFAULTS,
    pack: undefined,
    variant: undefined,
    icon: undefined,
  };
  const positional = [];

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === '--pack' && next) {
      args.pack = next;
      index += 1;
      continue;
    }

    if (arg === '--variant' && next) {
      args.variant = next;
      index += 1;
      continue;
    }

    if (arg === '--icon' && next) {
      args.icon = normalizeIconName(next);
      index += 1;
      continue;
    }

    if (arg === '--source-root' && next) {
      args.sourceRoot = next;
      index += 1;
      continue;
    }

    if (arg === '--min-overflow' && next) {
      args.minOverflow = Number(next);
      index += 1;
      continue;
    }

    if (arg === '--write') {
      args.write = true;
      continue;
    }

    if (!arg.startsWith('--')) {
      positional.push(arg);
    }
  }

  args.pack ??= positional[0];
  args.variant ??= positional[1];

  return args;
}

function normalizeIconName(value) {
  return path.basename(value, '.svg').toLowerCase().replace(/[_\s]+/g, '-');
}

function toPosixPath(value) {
  return value.split(path.sep).join('/');
}

function getVariantDirectories(packDir) {
  return fs
    .readdirSync(packDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));
}

function getSvgFiles(variantDir, iconName) {
  if (!fs.existsSync(variantDir)) {
    throw new Error(`Variant directory does not exist: ${toPosixPath(variantDir)}`);
  }

  return fs
    .readdirSync(variantDir)
    .filter((file) => file.endsWith('.svg'))
    .filter((file) => !iconName || normalizeIconName(file) === iconName)
    .sort((a, b) => a.localeCompare(b));
}

function assertInsideDirectory(filePath, directoryPath) {
  const resolvedFile = path.resolve(filePath);
  const resolvedDirectory = path.resolve(directoryPath);
  const relativePath = path.relative(resolvedDirectory, resolvedFile);

  if (relativePath.startsWith('..') || path.isAbsolute(relativePath)) {
    throw new Error(`Refusing to write file outside variant directory: ${toPosixPath(filePath)}`);
  }
}

function parseAttributes(attrs) {
  const result = {};
  const attrRegex = /([:\w-]+)=["']([^"']*)["']/g;
  let match;

  while ((match = attrRegex.exec(attrs)) !== null) {
    result[match[1]] = match[2];
  }

  return result;
}

function parseNumber(value, fallback = 0) {
  const number = Number(value);

  return Number.isFinite(number) ? number : fallback;
}

function parseNumberList(value) {
  return value
    .trim()
    .split(/[\s,]+/)
    .map((part) => Number(part))
    .filter((number) => Number.isFinite(number));
}

function parseViewBox(svgContent) {
  const match = svgContent.match(/viewBox=["']([^"']+)["']/);

  if (!match) {
    return undefined;
  }

  const values = parseNumberList(match[1]);

  if (values.length !== 4) {
    return undefined;
  }

  const [x, y, width, height] = values;

  return {
    value: match[1],
    x,
    y,
    width,
    height,
  };
}

function createBounds() {
  return {
    minX: Infinity,
    minY: Infinity,
    maxX: -Infinity,
    maxY: -Infinity,
  };
}

function hasBounds(bounds) {
  return (
    Number.isFinite(bounds.minX)
    && Number.isFinite(bounds.minY)
    && Number.isFinite(bounds.maxX)
    && Number.isFinite(bounds.maxY)
  );
}

function addPoint(bounds, x, y) {
  if (!Number.isFinite(x) || !Number.isFinite(y)) {
    return;
  }

  bounds.minX = Math.min(bounds.minX, x);
  bounds.minY = Math.min(bounds.minY, y);
  bounds.maxX = Math.max(bounds.maxX, x);
  bounds.maxY = Math.max(bounds.maxY, y);
}

function mergeBounds(target, source) {
  if (!hasBounds(source)) {
    return;
  }

  addPoint(target, source.minX, source.minY);
  addPoint(target, source.maxX, source.maxY);
}

function lineBounds(from, to) {
  const bounds = createBounds();

  addPoint(bounds, from.x, from.y);
  addPoint(bounds, to.x, to.y);

  return bounds;
}

function quadraticAt(p0, p1, p2, t) {
  const inverse = 1 - t;

  return inverse * inverse * p0 + 2 * inverse * t * p1 + t * t * p2;
}

function cubicAt(p0, p1, p2, p3, t) {
  const inverse = 1 - t;

  return (
    inverse * inverse * inverse * p0
    + 3 * inverse * inverse * t * p1
    + 3 * inverse * t * t * p2
    + t * t * t * p3
  );
}

function quadraticBounds(p0, p1, p2) {
  const bounds = createBounds();
  const points = [0, 1];

  for (const axis of ['x', 'y']) {
    const denominator = p0[axis] - 2 * p1[axis] + p2[axis];

    if (Math.abs(denominator) > EPSILON) {
      const t = (p0[axis] - p1[axis]) / denominator;

      if (t > 0 && t < 1) {
        points.push(t);
      }
    }
  }

  for (const t of points) {
    addPoint(
      bounds,
      quadraticAt(p0.x, p1.x, p2.x, t),
      quadraticAt(p0.y, p1.y, p2.y, t)
    );
  }

  return bounds;
}

function cubicAxisRoots(p0, p1, p2, p3) {
  const a = -p0 + 3 * p1 - 3 * p2 + p3;
  const b = 2 * (p0 - 2 * p1 + p2);
  const c = p1 - p0;

  if (Math.abs(a) < EPSILON) {
    if (Math.abs(b) < EPSILON) {
      return [];
    }

    return [-c / b].filter((t) => t > 0 && t < 1);
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  const root = Math.sqrt(discriminant);

  return [
    (-b + root) / (2 * a),
    (-b - root) / (2 * a),
  ].filter((t) => t > 0 && t < 1);
}

function cubicBounds(p0, p1, p2, p3) {
  const bounds = createBounds();
  const points = [
    0,
    1,
    ...cubicAxisRoots(p0.x, p1.x, p2.x, p3.x),
    ...cubicAxisRoots(p0.y, p1.y, p2.y, p3.y),
  ];

  for (const t of points) {
    addPoint(
      bounds,
      cubicAt(p0.x, p1.x, p2.x, p3.x, t),
      cubicAt(p0.y, p1.y, p2.y, p3.y, t)
    );
  }

  return bounds;
}

function normalizeRadians(value) {
  let normalized = value % TWO_PI;

  if (normalized < 0) {
    normalized += TWO_PI;
  }

  return normalized;
}

function vectorAngle(ux, uy, vx, vy) {
  const dot = ux * vx + uy * vy;
  const length = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
  const sign = ux * vy - uy * vx < 0 ? -1 : 1;
  const ratio = length === 0 ? 0 : Math.min(1, Math.max(-1, dot / length));

  return sign * Math.acos(ratio);
}

function isAngleInArc(angle, startAngle, deltaAngle) {
  if (deltaAngle >= 0) {
    return normalizeRadians(angle - startAngle) <= deltaAngle + EPSILON;
  }

  return normalizeRadians(startAngle - angle) <= Math.abs(deltaAngle) + EPSILON;
}

function arcPoint(center, rx, ry, phi, angle) {
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const cosAngle = Math.cos(angle);
  const sinAngle = Math.sin(angle);

  return {
    x: center.x + rx * cosAngle * cosPhi - ry * sinAngle * sinPhi,
    y: center.y + rx * cosAngle * sinPhi + ry * sinAngle * cosPhi,
  };
}

function arcBounds(from, arc) {
  let rx = Math.abs(arc.rx);
  let ry = Math.abs(arc.ry);
  const to = { x: arc.x, y: arc.y };
  const bounds = lineBounds(from, to);

  if (rx < EPSILON || ry < EPSILON || (Math.abs(from.x - to.x) < EPSILON && Math.abs(from.y - to.y) < EPSILON)) {
    return bounds;
  }

  const phi = (arc.rotation * Math.PI) / 180;
  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);
  const dx = (from.x - to.x) / 2;
  const dy = (from.y - to.y) / 2;
  const x1p = cosPhi * dx + sinPhi * dy;
  const y1p = -sinPhi * dx + cosPhi * dy;
  const lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);

  if (lambda > 1) {
    const scale = Math.sqrt(lambda);
    rx *= scale;
    ry *= scale;
  }

  const rxSquared = rx * rx;
  const rySquared = ry * ry;
  const x1pSquared = x1p * x1p;
  const y1pSquared = y1p * y1p;
  const denominator = rxSquared * y1pSquared + rySquared * x1pSquared;

  if (denominator === 0) {
    return bounds;
  }

  const sign = arc.largeArc === arc.sweep ? -1 : 1;
  const factor = sign * Math.sqrt(Math.max(0, (
    rxSquared * rySquared
    - rxSquared * y1pSquared
    - rySquared * x1pSquared
  ) / denominator));
  const cxp = factor * ((rx * y1p) / ry);
  const cyp = factor * (-(ry * x1p) / rx);
  const center = {
    x: cosPhi * cxp - sinPhi * cyp + (from.x + to.x) / 2,
    y: sinPhi * cxp + cosPhi * cyp + (from.y + to.y) / 2,
  };
  const startVector = {
    x: (x1p - cxp) / rx,
    y: (y1p - cyp) / ry,
  };
  const endVector = {
    x: (-x1p - cxp) / rx,
    y: (-y1p - cyp) / ry,
  };
  const startAngle = vectorAngle(1, 0, startVector.x, startVector.y);
  let deltaAngle = vectorAngle(startVector.x, startVector.y, endVector.x, endVector.y);

  if (!arc.sweep && deltaAngle > 0) {
    deltaAngle -= TWO_PI;
  }

  if (arc.sweep && deltaAngle < 0) {
    deltaAngle += TWO_PI;
  }

  const extremaAngles = [
    Math.atan2(-ry * sinPhi, rx * cosPhi),
    Math.atan2(-ry * sinPhi, rx * cosPhi) + Math.PI,
    Math.atan2(ry * cosPhi, rx * sinPhi),
    Math.atan2(ry * cosPhi, rx * sinPhi) + Math.PI,
  ];

  for (const angle of [startAngle, startAngle + deltaAngle, ...extremaAngles]) {
    if (isAngleInArc(angle, startAngle, deltaAngle)) {
      const point = arcPoint(center, rx, ry, phi, angle);
      addPoint(bounds, point.x, point.y);
    }
  }

  return bounds;
}

function tokenizePathData(pathData) {
  return pathData.match(/[AaCcHhLlMmQqSsTtVvZz]|[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g) ?? [];
}

function isCommand(token) {
  return /^[AaCcHhLlMmQqSsTtVvZz]$/.test(token);
}

function parsePathBounds(pathData) {
  const tokens = tokenizePathData(pathData);
  const bounds = createBounds();
  let index = 0;
  let command;
  let current = { x: 0, y: 0 };
  let subpathStart = { x: 0, y: 0 };
  let previousCommand;
  let previousCubicControl;
  let previousQuadraticControl;

  function hasNumber() {
    return index < tokens.length && !isCommand(tokens[index]);
  }

  function readNumber() {
    if (!hasNumber()) {
      return undefined;
    }

    const value = Number(tokens[index]);
    index += 1;

    return Number.isFinite(value) ? value : undefined;
  }

  function readPoint(relative) {
    const x = readNumber();
    const y = readNumber();

    if (x === undefined || y === undefined) {
      return undefined;
    }

    return {
      x: relative ? current.x + x : x,
      y: relative ? current.y + y : y,
    };
  }

  while (index < tokens.length) {
    if (isCommand(tokens[index])) {
      command = tokens[index];
      index += 1;
    }

    if (!command) {
      break;
    }

    const relative = command === command.toLowerCase();
    const normalizedCommand = command.toUpperCase();
    const previousWasCubic = previousCommand === 'C' || previousCommand === 'S';
    const previousWasQuadratic = previousCommand === 'Q' || previousCommand === 'T';

    if (normalizedCommand === 'Z') {
      mergeBounds(bounds, lineBounds(current, subpathStart));
      current = { ...subpathStart };
      previousCubicControl = undefined;
      previousQuadraticControl = undefined;
      previousCommand = 'Z';
      command = undefined;
      continue;
    }

    if (normalizedCommand === 'M') {
      let firstPoint = true;

      while (hasNumber()) {
        const point = readPoint(relative);

        if (!point) break;

        if (!firstPoint) {
          mergeBounds(bounds, lineBounds(current, point));
        }

        current = point;
        subpathStart = firstPoint ? point : subpathStart;
        firstPoint = false;
      }

      previousCubicControl = undefined;
      previousQuadraticControl = undefined;
      previousCommand = 'M';
      continue;
    }

    if (normalizedCommand === 'L') {
      while (hasNumber()) {
        const point = readPoint(relative);

        if (!point) break;

        mergeBounds(bounds, lineBounds(current, point));
        current = point;
      }

      previousCubicControl = undefined;
      previousQuadraticControl = undefined;
      previousCommand = 'L';
      continue;
    }

    if (normalizedCommand === 'H') {
      while (hasNumber()) {
        const x = readNumber();

        if (x === undefined) break;

        const point = {
          x: relative ? current.x + x : x,
          y: current.y,
        };

        mergeBounds(bounds, lineBounds(current, point));
        current = point;
      }

      previousCubicControl = undefined;
      previousQuadraticControl = undefined;
      previousCommand = 'H';
      continue;
    }

    if (normalizedCommand === 'V') {
      while (hasNumber()) {
        const y = readNumber();

        if (y === undefined) break;

        const point = {
          x: current.x,
          y: relative ? current.y + y : y,
        };

        mergeBounds(bounds, lineBounds(current, point));
        current = point;
      }

      previousCubicControl = undefined;
      previousQuadraticControl = undefined;
      previousCommand = 'V';
      continue;
    }

    if (normalizedCommand === 'C') {
      while (hasNumber()) {
        const control1 = readPoint(relative);
        const control2 = readPoint(relative);
        const point = readPoint(relative);

        if (!control1 || !control2 || !point) break;

        mergeBounds(bounds, cubicBounds(current, control1, control2, point));
        current = point;
        previousCubicControl = control2;
        previousQuadraticControl = undefined;
      }

      previousCommand = 'C';
      continue;
    }

    if (normalizedCommand === 'S') {
      while (hasNumber()) {
        const control1 = previousWasCubic && previousCubicControl
          ? {
            x: current.x * 2 - previousCubicControl.x,
            y: current.y * 2 - previousCubicControl.y,
          }
          : { ...current };
        const control2 = readPoint(relative);
        const point = readPoint(relative);

        if (!control2 || !point) break;

        mergeBounds(bounds, cubicBounds(current, control1, control2, point));
        current = point;
        previousCubicControl = control2;
        previousQuadraticControl = undefined;
      }

      previousCommand = 'S';
      continue;
    }

    if (normalizedCommand === 'Q') {
      while (hasNumber()) {
        const control = readPoint(relative);
        const point = readPoint(relative);

        if (!control || !point) break;

        mergeBounds(bounds, quadraticBounds(current, control, point));
        current = point;
        previousQuadraticControl = control;
        previousCubicControl = undefined;
      }

      previousCommand = 'Q';
      continue;
    }

    if (normalizedCommand === 'T') {
      while (hasNumber()) {
        const control = previousWasQuadratic && previousQuadraticControl
          ? {
            x: current.x * 2 - previousQuadraticControl.x,
            y: current.y * 2 - previousQuadraticControl.y,
          }
          : { ...current };
        const point = readPoint(relative);

        if (!point) break;

        mergeBounds(bounds, quadraticBounds(current, control, point));
        current = point;
        previousQuadraticControl = control;
        previousCubicControl = undefined;
      }

      previousCommand = 'T';
      continue;
    }

    if (normalizedCommand === 'A') {
      while (hasNumber()) {
        const rx = readNumber();
        const ry = readNumber();
        const rotation = readNumber();
        const largeArc = readNumber();
        const sweep = readNumber();
        const point = readPoint(relative);

        if (
          rx === undefined
          || ry === undefined
          || rotation === undefined
          || largeArc === undefined
          || sweep === undefined
          || !point
        ) {
          break;
        }

        mergeBounds(bounds, arcBounds(current, {
          rx,
          ry,
          rotation,
          largeArc: Boolean(largeArc),
          sweep: Boolean(sweep),
          x: point.x,
          y: point.y,
        }));
        current = point;
      }

      previousCubicControl = undefined;
      previousQuadraticControl = undefined;
      previousCommand = 'A';
      continue;
    }

    break;
  }

  return bounds;
}

function parsePointsBounds(points) {
  const values = parseNumberList(points);
  const bounds = createBounds();

  for (let index = 0; index + 1 < values.length; index += 2) {
    addPoint(bounds, values[index], values[index + 1]);
  }

  return bounds;
}

function getElementBounds(tagName, attrs) {
  if (tagName === 'path' && attrs.d) {
    return parsePathBounds(attrs.d);
  }

  if (tagName === 'circle') {
    const cx = parseNumber(attrs.cx);
    const cy = parseNumber(attrs.cy);
    const r = parseNumber(attrs.r);
    const bounds = createBounds();

    addPoint(bounds, cx - r, cy - r);
    addPoint(bounds, cx + r, cy + r);

    return bounds;
  }

  if (tagName === 'ellipse') {
    const cx = parseNumber(attrs.cx);
    const cy = parseNumber(attrs.cy);
    const rx = parseNumber(attrs.rx);
    const ry = parseNumber(attrs.ry);
    const bounds = createBounds();

    addPoint(bounds, cx - rx, cy - ry);
    addPoint(bounds, cx + rx, cy + ry);

    return bounds;
  }

  if (tagName === 'rect') {
    const x = parseNumber(attrs.x);
    const y = parseNumber(attrs.y);
    const width = parseNumber(attrs.width);
    const height = parseNumber(attrs.height);
    const bounds = createBounds();

    addPoint(bounds, x, y);
    addPoint(bounds, x + width, y + height);

    return bounds;
  }

  if (tagName === 'line') {
    return lineBounds(
      { x: parseNumber(attrs.x1), y: parseNumber(attrs.y1) },
      { x: parseNumber(attrs.x2), y: parseNumber(attrs.y2) }
    );
  }

  if ((tagName === 'polyline' || tagName === 'polygon') && attrs.points) {
    return parsePointsBounds(attrs.points);
  }

  return createBounds();
}

function getSvgContentBounds(svgContent) {
  const bounds = createBounds();
  const elementRegex = /<(path|circle|ellipse|rect|line|polyline|polygon)\b([^>]*)>/gi;
  let match;

  while ((match = elementRegex.exec(svgContent)) !== null) {
    const [, tagName, rawAttrs] = match;
    const attrs = parseAttributes(rawAttrs);

    mergeBounds(bounds, getElementBounds(tagName.toLowerCase(), attrs));
  }

  return bounds;
}

function formatNumber(value) {
  const rounded = Math.round((value + Number.EPSILON) * 1000) / 1000;
  const normalized = Object.is(rounded, -0) ? 0 : rounded;

  return Number.isInteger(normalized) ? String(normalized) : String(normalized);
}

function formatViewBox(values) {
  return values.map(formatNumber).join(' ');
}

function getCorrectedViewBox(viewBox, contentBounds, minOverflow) {
  const viewBoxBounds = viewBox
    ? {
      minX: viewBox.x,
      minY: viewBox.y,
      maxX: viewBox.x + viewBox.width,
      maxY: viewBox.y + viewBox.height,
    }
    : {
      minX: contentBounds.minX,
      minY: contentBounds.minY,
      maxX: contentBounds.maxX,
      maxY: contentBounds.maxY,
    };

  const correctedBounds = {
    minX: Math.min(viewBoxBounds.minX, contentBounds.minX),
    minY: Math.min(viewBoxBounds.minY, contentBounds.minY),
    maxX: Math.max(viewBoxBounds.maxX, contentBounds.maxX),
    maxY: Math.max(viewBoxBounds.maxY, contentBounds.maxY),
  };
  const overflows = {
    left: Math.max(0, viewBoxBounds.minX - contentBounds.minX),
    top: Math.max(0, viewBoxBounds.minY - contentBounds.minY),
    right: Math.max(0, contentBounds.maxX - viewBoxBounds.maxX),
    bottom: Math.max(0, contentBounds.maxY - viewBoxBounds.maxY),
  };
  const needsCorrection = Object.values(overflows).some((value) => value > minOverflow);

  if (!needsCorrection) {
    return undefined;
  }

  const values = [
    correctedBounds.minX,
    correctedBounds.minY,
    correctedBounds.maxX - correctedBounds.minX,
    correctedBounds.maxY - correctedBounds.minY,
  ];

  return {
    value: formatViewBox(values),
    overflows,
  };
}

function withViewBox(svgContent, viewBoxValue) {
  if (/viewBox=["'][^"']+["']/.test(svgContent)) {
    return svgContent.replace(/viewBox=(["'])[^"']+\1/, (match, quote) => `viewBox=${quote}${viewBoxValue}${quote}`);
  }

  return svgContent.replace(/<svg\b([^>]*)>/, (match, attrs) => `<svg${attrs} viewBox="${viewBoxValue}">`);
}

function inspectSvgFile(filePath, variantDir, options) {
  const source = fs.readFileSync(filePath, 'utf8');
  const viewBox = parseViewBox(source);
  const contentBounds = getSvgContentBounds(source);

  if (!hasBounds(contentBounds)) {
    return {
      status: 'skipped',
      file: toPosixPath(filePath),
      reason: 'no-supported-svg-content',
    };
  }

  const correction = getCorrectedViewBox(viewBox, contentBounds, options.minOverflow);

  if (!correction) {
    return {
      status: 'unchanged',
      file: toPosixPath(filePath),
    };
  }

  const output = withViewBox(source, correction.value);

  if (options.write && output !== source) {
    assertInsideDirectory(filePath, variantDir);
    fs.writeFileSync(filePath, output, 'utf8');
  }

  return {
    status: options.write ? 'written' : 'found',
    file: toPosixPath(filePath),
    oldViewBox: viewBox?.value,
    newViewBox: correction.value,
    bounds: {
      minX: formatNumber(contentBounds.minX),
      minY: formatNumber(contentBounds.minY),
      maxX: formatNumber(contentBounds.maxX),
      maxY: formatNumber(contentBounds.maxY),
    },
    overflows: correction.overflows,
  };
}

function fixViewBoxIcons(options) {
  if (!options.pack) {
    throw new Error('Missing required pack. Usage: pnpm run viewbox:icons -- --pack core --variant regular [--icon wheelchair] [--write]');
  }

  if (!Number.isFinite(options.minOverflow) || options.minOverflow < 0) {
    throw new Error('Invalid --min-overflow value. Use a positive number or 0.');
  }

  const packDir = path.join(options.sourceRoot, options.pack);

  if (!fs.existsSync(packDir)) {
    throw new Error(`Pack directory does not exist: ${toPosixPath(packDir)}`);
  }

  const variants = options.variant ? [options.variant] : getVariantDirectories(packDir);
  const results = [];

  for (const variant of variants) {
    const variantDir = path.join(packDir, variant);
    const files = getSvgFiles(variantDir, options.icon);

    for (const file of files) {
      results.push({
        pack: options.pack,
        variant,
        ...inspectSvgFile(path.join(variantDir, file), variantDir, options),
      });
    }
  }

  return results;
}

function formatOverflow(overflows) {
  return Object.entries(overflows)
    .filter(([, value]) => value > EPSILON)
    .map(([side, value]) => `${side} ${formatNumber(value)}`)
    .join(', ');
}

const args = parseArgs(process.argv.slice(2));
const results = fixViewBoxIcons(args);
const found = results.filter((result) => result.status === 'found' || result.status === 'written');
const skipped = results.filter((result) => result.status === 'skipped');
const written = results.filter((result) => result.status === 'written');

console.log('\nIcon viewBox audit completed.\n');
console.log(`Pack: ${args.pack}`);
console.log(`Variant: ${args.variant ?? 'all'}`);
console.log(`Icon: ${args.icon ?? 'all'}`);
console.log(`Scanned SVGs: ${results.length}`);
console.log(`Out-of-bounds SVGs: ${found.length}`);
console.log(`Written SVGs: ${written.length}`);
console.log(`Dry run: ${args.write ? 'no' : 'yes'}`);

if (found.length > 0) {
  console.log('\nAffected SVGs:\n');

  for (const result of found) {
    console.log(`- ${result.file}`);
    console.log(`  viewBox: "${result.oldViewBox ?? '(missing)'}" -> "${result.newViewBox}"`);
    console.log(`  bounds: x ${result.bounds.minX}..${result.bounds.maxX}, y ${result.bounds.minY}..${result.bounds.maxY}`);
    console.log(`  overflow: ${formatOverflow(result.overflows)}`);
  }
}

if (skipped.length > 0) {
  console.log(`\nSkipped SVGs: ${skipped.length}`);
}

console.log('');
