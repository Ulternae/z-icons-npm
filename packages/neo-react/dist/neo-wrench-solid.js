import React from 'react';

export function NeoWrenchSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M221.7 53.7C259.5 15.9 312.6-.1 365.2 0c23.4.1 41.1 14.7 47.5 34 6.1 18.5 1.3 39.7-13.7 54.7l-44.8 44.8c-2.6 2.6-4.1 6.2-4.1 9.9V196c0 7.7 6.3 14 14 14h52.6c3.7 0 7.3-1.5 9.9-4.1l44.8-44.8c15-15 36.2-19.8 54.7-13.7 19.3 6.3 33.9 24.1 34 47.5.1 52.6-15.9 105.6-53.7 143.5-35.3 35.3-84.9 53.7-142.3 53.7-17.5 0-34.3-1.7-50.2-5.1-1.7-.4-3 .1-3.2.2L201.3 518.9c-21.6 26-53.7 41.1-87.5 41.1C51 560 .1 509.1.1 446.3c0-33.8 15.1-65.9 41.1-87.5l131.7-109.4c.1-.2.6-1.5.2-3.2-3.4-15.9-5.1-32.7-5.1-50.2 0-57.4 18.4-107 53.7-142.3M112 476a28 28 0 1 0 0-56 28 28 0 1 0 0 56"})
  );
}

export default NeoWrenchSolid;
