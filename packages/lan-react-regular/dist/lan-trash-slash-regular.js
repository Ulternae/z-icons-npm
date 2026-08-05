import React from 'react';

export function LanTrashSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L464.4 398.6 483.3 144h-48.2l-15.5 209.7L161.8 96H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96L375.8 4.8c-4.7-12.5-16.6-20.8-30-20.8H230.2c-13.3 0-25.3 8.3-30 20.8L184 48h-70.2zM394.2 464H179.5c-8.4 0-15.3-6.5-16-14.8L146.2 216l-52-52 21.4 288.7c2.5 33.4 30.3 59.3 63.8 59.3h217.1c12.9 0 25-3.8 35.1-10.5z"})
  );
}

export default LanTrashSlashRegular;
