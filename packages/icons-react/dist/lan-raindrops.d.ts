import React from 'react';

export interface LanRaindropsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRaindrops: React.FC<LanRaindropsProps>;
export default LanRaindrops;
