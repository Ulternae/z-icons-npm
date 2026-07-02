import React from 'react';

export function CoreMusicRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M192 151.1v60.5c74.7-24.9 149.3-49.8 224-74.7V76.4c-74.7 24.9-149.3 49.8-224 74.7","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M480 76.4c0-43.7-42.8-74.5-84.2-60.7l-224 74.7c-26.1 8.7-43.8 33.2-43.8 60.7v174.4c-10-3.5-20.8-5.5-32-5.5-53 0-96 43-96 96s43 96 96 96 96-43 96-96V279.1l224-74.7v89.1c-10-3.5-20.8-5.5-32-5.5-53 0-96 43-96 96s43 96 96 96 96-43 96-96zM416 384c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m-288 32c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m288-279.1-224 74.7v-60.5l224-74.7z"})
  );
}

export default CoreMusicRegularDuo;
