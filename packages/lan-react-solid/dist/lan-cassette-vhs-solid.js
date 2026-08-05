import React from 'react';

export function LanCassetteVhsSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v16H0zm0 64h512v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm102.7 64c-9.1 0-18 3.7-23 11.3C69.8 282.4 64 300.5 64 320s5.8 37.6 15.7 52.7c5 7.6 13.9 11.3 23 11.3H160v-24c-22.1 0-40-17.9-40-40s17.9-40 40-40v-24zm177.7 128H304V256h-96v128zm128.8 0c9.1 0 18-3.7 23-11.3 9.9-15.1 15.7-33.2 15.7-52.7s-5.8-37.6-15.7-52.7c-5-7.6-13.9-11.3-23-11.3h-57.3v24c22.1 0 40 17.9 40 40s-17.9 40-40 40v24z"})
  );
}

export default LanCassetteVhsSolid;
