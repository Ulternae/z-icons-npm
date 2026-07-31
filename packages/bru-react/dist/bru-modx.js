import React from 'react';

export function BruModx({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m356 241.8 36.7 23.7V480l-133-83.8zM440 75H226.3l-23 37.8 153.5 96.5zm-89 142.8L55.2 32v214.5l46 29zM97 294.2 8 437h213.7l125-200.5z"})
  );
}

export default BruModx;
