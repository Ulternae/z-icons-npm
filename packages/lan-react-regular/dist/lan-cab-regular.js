import React from 'react';

export function LanCabRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 0c-17.7 0-32 14.3-32 32v32h-7.1c-44.5 0-83.1 30.5-93.4 73.8L46 194.6C19.4 202.4 0 226.9 0 256v200c0 13.3 10.7 24 24 24s24-10.7 24-24v-40h416v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-29.1-19.4-53.6-46-61.4l-13.5-56.8C442.2 94.5 403.6 64 359.1 64H352V32c0-17.7-14.3-32-32-32zm-85.8 148.9c5.1-21.6 24.5-36.9 46.7-36.9h206.3c22.2 0 41.5 15.3 46.7 36.9l10.3 43.1H96l10.3-43.1zM448 240c8.8 0 16 7.2 16 16v112H48V256c0-8.8 7.2-16 16-16zm-304 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m256 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanCabRegular;
