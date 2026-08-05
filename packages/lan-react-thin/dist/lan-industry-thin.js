import React from 'react';

export function LanIndustryThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M40 48c-13.3 0-24 10.7-24 24v352c0 22.1 17.9 40 40 40h400c22.1 0 40-17.9 40-40V152.9c0-12.2-13.2-19.9-23.8-14l-140.3 78.6c-2.5 1.4-5.5 1.4-8-.1s-4-4.1-4-6.9v-56.8c0-12.3-13.4-20-24.1-13.8L156 221.6c-2.5 1.4-5.5 1.5-8 0s-4-4.1-4-6.9V72c0-13.3-10.7-24-24-24zM0 72c0-22.1 17.9-40 40-40h80c22.1 0 40 17.9 40 40v128.7l127.9-74.6c21.3-12.4 48.1 2.9 48.1 27.6v43.1l128.4-71.9c21.3-11.9 47.6 3.5 47.6 27.9V424c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56z"})
  );
}

export default LanIndustryThin;
