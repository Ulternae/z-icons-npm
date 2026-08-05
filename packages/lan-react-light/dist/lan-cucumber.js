import React from 'react';

export function LanCucumber({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m196.4 451.9 256-256c37.5-37.5 37.5-98.3 0-135.8s-98.3-37.5-135.8 0l-256 256c-37.5 37.5-37.5 98.3 0 135.8s98.3 37.5 135.8 0m21.8 23.4c-50 49.2-130.5 48.9-180.2-.8-50-50-50-131 0-181l95.2-95.2c-7-9.4-6.2-22.7 2.3-31.2s21.9-9.3 31.2-2.3L294 37.5c50-50 131-50 181 0 49.7 49.7 50 130.2.8 180.2 7 9.4 6.2 22.7-2.3 31.3s-21.8 9.3-31.2 2.3L251.8 441.7c7 9.4 6.2 22.7-2.3 31.2s-21.9 9.3-31.3 2.3zM128.5 308a20 20 0 1 1 40 0 20 20 0 1 1-40 0m204-84a20 20 0 1 1 0 40 20 20 0 1 1 0-40m12-108a20 20 0 1 1 40 0 20 20 0 1 1-40 0"})
  );
}

export default LanCucumber;
