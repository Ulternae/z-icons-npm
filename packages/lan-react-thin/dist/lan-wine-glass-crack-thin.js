import React from 'react';

export function LanWineGlassCrackThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320.1 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56.3 5.7C57.4 2.3 60.5 0 64 0h192c3.5 0 6.6 2.3 7.7 5.7l49.7 163.2c4.4 14.6 6.7 29.7 6.7 44.9 0 84.4-67.8 153-152 154.2v160h88c4.4 0 8 3.6 8 8s-3.6 8-8 8H64c-4.4 0-8-3.6-8-8s3.6-8 8-8h88V368C67.8 366.8 0 298.2 0 213.8c0-15.2 2.3-30.4 6.7-44.9zM69.9 16 22 173.5c-4 13-6 26.6-6 40.2 0 76.3 61.9 138.2 138.2 138.2h11.5c76.3 0 138.2-61.9 138.2-138.2 0-13.6-2-27.2-6-40.2L250.1 16h-81.5l30.8 77c1.5 3.9-.1 8.3-3.8 10.1l-54.1 27 56.2 56.2c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-64-64c-1.8-1.8-2.7-4.4-2.2-6.9s2-4.7 4.3-5.9l57.4-28.7-29.3-73.2-1.2-3H69.9z"})
  );
}

export default LanWineGlassCrackThin;
