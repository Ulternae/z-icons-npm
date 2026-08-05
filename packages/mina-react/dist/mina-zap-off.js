import React from 'react';

export function MinaZapOff({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m3 21 6.971-6.971M21 3l-6.971 6.971m-4.058 4.058h1.492c.285 0 .506.267.47.57l-.68 5.83c-.06.502.53.776.834.387l7.802-10.013c.258-.33.038-.832-.364-.832h-5.496m-4.058 4.058 4.058-4.058M5.5 14.029H4.475c-.402 0-.622-.502-.364-.832l7.802-10.013c.303-.389.894-.115.835.388l-.46 3.928"})
  );
}

export default MinaZapOff;
