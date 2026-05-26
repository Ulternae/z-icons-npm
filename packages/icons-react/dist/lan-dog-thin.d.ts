import React from 'react';

export interface LanDogThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDogThin: React.FC<LanDogThinProps>;
export default LanDogThin;
