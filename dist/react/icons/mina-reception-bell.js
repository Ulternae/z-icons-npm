import React from 'react';

export const MinaReceptionBell = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M2.5 19.5h19M12 7.714V4.5m0 3.214H9.889c-2.915 0-5.278 2.399-5.278 5.357v3.215H19.39V13.07c0-2.958-2.363-5.357-5.278-5.357zM12 4.5H9.889M12 4.5h2.111"})
);

export default MinaReceptionBell;
