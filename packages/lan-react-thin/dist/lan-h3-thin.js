import React from 'react';

export function LanH3Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 72c0-4.4-3.6-8-8-8s-8 3.6-8 8v368c0 4.4 3.6 8 8 8s8-3.6 8-8V264h192v176c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8v176H48zm304 184c0 4.4 3.6 8 8 8h92c46.4 0 84 37.6 84 84s-37.6 84-84 84H328c-4.4 0-8 3.6-8 8s3.6 8 8 8h124c55.2 0 100-44.8 100-100 0-41.3-25-76.7-60.7-92 35.7-15.3 60.7-50.7 60.7-92 0-55.2-44.8-100-100-100H328c-4.4 0-8 3.6-8 8s3.6 8 8 8h124c46.4 0 84 37.6 84 84s-37.6 84-84 84h-92c-4.4 0-8 3.6-8 8"})
  );
}

export default LanH3Thin;
