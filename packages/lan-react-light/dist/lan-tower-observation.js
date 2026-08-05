import React from 'react';

export function LanTowerObservation({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M216.8 1.7c4.5-2.3 9.8-2.3 14.3 0l176 88c7.9 4 11.1 13.6 7.2 21.5s-13.6 11.1-21.5 7.2L384 114v78.1c0 26.5-21.5 48-48 48h-7.8l39.6 237.4c.1.9.2 1.8.2 2.6h64c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c0-.9.1-1.7.2-2.6L119.8 240H112c-26.5 0-48-21.5-48-48v-78.1l-8.8 4.4c-7.9 4-17.5.7-21.5-7.2s-.7-17.5 7.2-21.5l176-88zm7.2 32.2-128 64V128h256V97.9zM96 160v32c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-32zm231.4 320L224 391.4 120.6 480zM152 240c0 .9-.1 1.7-.2 2.6l-6.5 39.1 78.7 67.5 78.7-67.5-6.5-39.1c-.1-.9-.2-1.8-.2-2.6zm-12.9 78.6L119 439.2l80.4-68.9zm109.5 51.7 80.4 68.9-20.1-120.6z"})
  );
}

export default LanTowerObservation;
