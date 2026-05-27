import React from 'react';

export interface CoreVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreVideo: React.FC<CoreVideoProps>;
export default CoreVideo;
