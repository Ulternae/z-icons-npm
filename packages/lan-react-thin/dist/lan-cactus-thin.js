import React from 'react';

export function LanCactusThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 0c53 0 96 43 96 96v128.8c10.2-10.4 24.3-16.8 40-16.8 30.9 0 56 25.1 56 56v96c0 39.8-32.2 72-72 72h-24v40c0 22.1-17.9 40-40 40H136c-22.1 0-40-17.9-40-40V320H72c-39.8 0-72-32.2-72-72v-96c0-30.9 25.1-56 56-56 15.7 0 29.8 6.5 40 16.8V96c0-53 43-96 96-96m0 16c-44.2 0-80 35.8-80 80v128c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72c0-22.1-17.9-40-40-40s-40 17.9-40 40v96c0 30.9 25.1 56 56 56h32c4.4 0 8 3.6 8 8v160c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-48c0-4.4 3.6-8 8-8h32c30.9 0 56-25.1 56-56v-96c0-22.1-17.9-40-40-40s-40 17.9-40 40v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V96c0-44.2-35.8-80-80-80m32 352a16 16 0 1 1 0-32 16 16 0 1 1 0 32m-64-192a16 16 0 1 1 0-32 16 16 0 1 1 0 32"})
  );
}

export default LanCactusThin;
