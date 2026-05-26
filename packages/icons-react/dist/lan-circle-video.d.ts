import React from 'react';

export interface LanCircleVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleVideo: React.FC<LanCircleVideoProps>;
export default LanCircleVideo;
