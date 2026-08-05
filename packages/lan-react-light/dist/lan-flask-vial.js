import React from 'react';

export function LanFlaskVial({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 320V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 0 0 7.2 0 16s7.2 16 16 16h16v288c0 53 43 96 96 96 26.7 0 50.9-10.9 68.3-28.6L224 323zM64 32h128v128H64zm0 160h128v128c0 35.3-28.7 64-64 64s-64-28.7-64-64zM304 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v188.7l-91.5 213.5c-3 7-4.5 14.4-4.5 22 0 30.8 25 55.8 55.8 55.8h272.4c30.8 0 55.8-25 55.8-55.8 0-7.6-1.5-15-4.5-22L512 220.7V32h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm176 32v192c0 2.2.4 4.3 1.3 6.3l38.4 89.7H312.2l38.4-89.7c.9-2 1.3-4.1 1.3-6.3V32h128zM257.9 446.8l40.6-94.8h234.9l40.6 94.8c1.3 3 1.9 6.2 1.9 9.4 0 13.2-10.7 23.8-23.8 23.8H279.7c-13.2 0-23.8-10.7-23.8-23.8 0-3.2.7-6.4 1.9-9.4z"})
  );
}

export default LanFlaskVial;
