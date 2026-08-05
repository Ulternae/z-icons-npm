import React from 'react';

export function LanPlaneFlyingSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M401.7 176 249.8 10.4C243.8 3.8 235.2 0 226.3 0h-43.8c-10.9 0-18.6 10.7-15.2 21.1L218.9 176H115.4l-44-55c-4.6-5.7-11.5-9-18.7-9H35.4c-10 0-17.5 9-15.7 18.9l19 104.6c5.5 30.4 32 52.6 63 52.6h450.6c30.9 0 56-25.1 56-56s-25.1-56-56-56H401.6zM64.3 448c-17.7 0-32 14.3-32 32s14.3 32 32 32h512c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
  );
}

export default LanPlaneFlyingSolid;
