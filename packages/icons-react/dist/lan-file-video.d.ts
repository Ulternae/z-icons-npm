import React from 'react';

export interface LanFileVideoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileVideo: React.FC<LanFileVideoProps>;
export default LanFileVideo;
