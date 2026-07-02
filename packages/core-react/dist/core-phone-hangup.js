import React from 'react';

export function CorePhoneHangup({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M144 272v48H64v-36.3c0-44.6 23.2-86 61.3-109.2l12.6-7.7c92.2-56.3 208.2-56.3 300.4 0l12.6 7.7c38 23.3 61.3 64.6 61.3 109.2V320h-80v-48c0-22.5-11.8-43.3-31.1-54.9l-1.8-1.1c-68.4-41-153.9-41-222.3 0l-1.8 1.1C155.8 228.7 144 249.5 144 272m224 0v48c0 35.3 28.7 64 64 64h80c35.3 0 64-28.7 64-64v-36.3c0-66.9-34.8-129-91.9-163.8l-12.6-7.7c-112.7-68.9-254.4-68.9-367.1 0l-12.6 7.7C34.8 154.7 0 216.8 0 283.7V320c0 35.3 28.7 64 64 64h80c35.3 0 64-28.7 64-64v-48l1.8-1.1c48.1-28.9 108.3-28.9 156.4 0z"})
  );
}

export default CorePhoneHangup;
