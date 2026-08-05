import React from 'react';

export function MinaBrandCodepen({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m12 4 8 5.2M12 4 4 9.2M12 4v5.2m8 0v5.6m0-5.6-8 5.6m8 0L12 20m8-5.2-8-5.6M12 20l-8-5.2m8 5.2v-5.2m-8 0V9.2m0 5.6 8-5.6m-8 0 8 5.6"})
  );
}

export default MinaBrandCodepen;
