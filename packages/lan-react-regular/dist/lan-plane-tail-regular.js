import React from 'react';

export function LanPlaneTailRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M68.8 9.6C73.3 3.6 80.5 0 88 0h75.6c24.9 0 48.6 10.5 65.3 29l204.9 226.9-.1.1H512v48H94.1c-7.8 0-14.1 6.3-14.1 14.1 0 4.2 1.9 8.2 5.1 10.9 105.6 87.3 238.5 135.1 375.5 135.1H512v48h-51.4c-148.2-.1-291.8-51.8-406.1-146.2C40.3 354.1 32 336.6 32 318.1c0-34.3 27.8-62.1 62.1-62.1h36.3L65 30.7c-2.1-7.2-.7-15.1 3.9-21.1zm124.4 51.6c-7.5-8.4-18.3-13.2-29.6-13.2H120l60.4 208h188.9l-176-194.8zM304 352h120c13.3 0 24 10.7 24 24s-10.7 24-24 24H304c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanPlaneTailRegular;
