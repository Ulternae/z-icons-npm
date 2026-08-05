import React from 'react';

export function LanBarcodeScan({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 32c-8.8 0-16 7.2-16 16v176H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h544c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v176h-64V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v176h-64V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v176h-32V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v176h-64V48c0-8.8-7.2-16-16-16s-16 7.2-16 16v176H96V48c0-8.8-7.2-16-16-16M64 464c0 8.8 7.2 16 16 16s16-7.2 16-16V304H64zm64 0c0 8.8 7.2 16 16 16s16-7.2 16-16V304h-32zm96 0c0 8.8 7.2 16 16 16s16-7.2 16-16V304h-32zm64 0c0 8.8 7.2 16 16 16s16-7.2 16-16V304h-32zm96 0c0 8.8 7.2 16 16 16s16-7.2 16-16V304h-32zm96 0c0 8.8 7.2 16 16 16s16-7.2 16-16V304h-32z"})
  );
}

export default LanBarcodeScan;
