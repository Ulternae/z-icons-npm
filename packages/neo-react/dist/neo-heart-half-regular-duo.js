import React from 'react';

export function NeoHeartHalfRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56 182c0-32.5 10.2-56.4 25.9-72.1S121.5 84 154 84s56.4 10.2 72.1 25.9S252 149.5 252 182v288.2c-22.3-15.7-65.8-48.9-106.4-93.9C96.9 322 56 254.5 56 182","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M42.3 70.3C70.4 42.3 109.5 28 154 28s83.6 14.3 111.7 42.3S308 137.5 308 182v300.2c0 27.5-22.3 49.8-49.8 49.8-9.2 0-18.6-2.5-26.9-8.1-17.7-11.8-74.6-51.6-127.3-110.2C51.8 355.6 0 275 0 182c0-44.5 14.3-83.6 42.3-111.7m39.6 39.6C66.2 125.6 56 149.5 56 182c0 72.5 40.9 140 89.6 194.3 40.5 45.1 84 78.2 106.4 93.9V182c0-32.5-10.2-56.4-25.9-72.1S186.5 84 154 84s-56.4 10.2-72.1 25.9"})
  );
}

export default NeoHeartHalfRegularDuo;
