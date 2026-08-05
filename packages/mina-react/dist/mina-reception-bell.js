import React from 'react';

export function MinaReceptionBell({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M2.5 19.5h19M12 7.714V4.5m0 3.214H9.889c-2.915 0-5.278 2.399-5.278 5.357v3.215H19.39V13.07c0-2.958-2.363-5.357-5.278-5.357zM12 4.5H9.889M12 4.5h2.111"})
  );
}

export default MinaReceptionBell;
