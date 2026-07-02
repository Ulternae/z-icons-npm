import React from 'react';

export function CoreMugHot({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M100-10.5c0 24.4 9.7 47.8 26.9 65.1l26.5 26.5c6.8 6.7 10.6 15.9 10.6 25.4V128h56v-21.5c0-24.4-9.7-47.8-26.9-65.1l-26.6-26.5C159.8 8.2 156-1 156-10.5V-32h-56zM96 192H64v192c0 70.7 57.3 128 128 128h128c59.6 0 109.8-40.8 124-96h20c61.9 0 112-50.1 112-112s-50.1-112-112-112zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16zM128 384V256h256v128c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64M228-32v21.5c0 24.4 9.7 47.8 26.9 65.1l26.5 26.5c6.8 6.7 10.6 15.9 10.6 25.4V128h56v-21.5c0-24.4-9.7-47.8-26.9-65.1l-26.6-26.5C287.8 8.2 284-1 284-10.5V-32z"})
  );
}

export default CoreMugHot;
