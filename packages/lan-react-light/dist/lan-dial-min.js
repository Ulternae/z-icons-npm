import React from 'react';

export function LanDialMin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-11.3 220.7-89.8 89.8c-39.1-50.2-35.5-122.9 10.6-169 50-50 131-50 181 0s50 131 0 181c-46.2 46.2-118.8 49.7-169 10.6l89.8-89.8c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0M174.9 401.1a160 160 0 1 0 226.2-226.2 160 160 0 1 0-226.2 226.2M568 288a24 24 0 1 0-48 0 24 24 0 1 0 48 0M32 312a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88-216a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M120 480a24 24 0 1 0-48 0 24 24 0 1 0 48 0m360 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
  );
}

export default LanDialMin;
