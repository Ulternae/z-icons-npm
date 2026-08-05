import React from 'react';

export function LanPersonCarryEmptyRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 320.1 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128-32a56 56 0 1 1 0 112 56 56 0 1 1 0-112M64 176.4c0-35.6 28.8-64.4 64.4-64.4 23.3 0 44.7 12.5 56.1 32.8l42.1 74.8c7.1 12.6 20.4 20.4 34.9 20.4h34.6c13.3 0 24 10.7 24 24s-10.7 24-24 24h-34.6c-27.4 0-52.9-12.7-69.4-33.9V352l12.8 9.6C227 378.2 240 404.3 240 432v88c0 13.3-10.7 24-24 24s-24-10.7-24-24v-88c0-12.6-5.9-24.4-16-32l-76.8-57.6C77 325.8 64 299.7 64 272zm0 193.2c3.5 3.5 7.2 6.8 11 9.9l37 29.6v111c0 13.3-10.7 24-24 24s-24-10.7-24-24V369.7zM128 160c-8.8 0-16 7.2-16 16v95.4c0 10.6 4.2 20.8 11.7 28.3L144 320V176c0-8.8-7.2-16-16-16"})
  );
}

export default LanPersonCarryEmptyRegular;
