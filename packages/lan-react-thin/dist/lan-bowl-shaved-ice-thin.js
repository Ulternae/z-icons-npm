import React from 'react';

export function LanBowlShavedIceThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M400 192c0 5.4-.2 10.7-.7 16h16.1c.4-5.3.7-10.6.7-16 0-106-86-192-192-192S32 86 32 192c0 5.4.2 10.7.7 16h16.1c-.5-5.3-.7-10.6-.7-16 0-97.2 78.8-176 176-176S400 94.8 400 192M8 256c-4.4 0-8 3.6-8 8v32c0 66.3 53.7 120 120 120h28.9l-28.5 85.5c-.8 2.4-.4 5.1 1.1 7.2s3.9 3.3 6.5 3.3h192c2.6 0 5-1.2 6.5-3.3s1.9-4.8 1.1-7.2L299.1 416H328c66.3 0 120-53.7 120-120v-32c0-4.4-3.6-8-8-8zm8 40v-24h416v24c0 57.4-46.6 104-104 104h-40c-2.6 0-5 1.2-6.5 3.3s-1.9 4.8-1.1 7.2l28.5 85.5H139.1l28.5-85.5c.8-2.4.4-5.1-1.1-7.2s-3.9-3.3-6.5-3.3h-40c-57.4 0-104-46.6-104-104"})
  );
}

export default LanBowlShavedIceThin;
