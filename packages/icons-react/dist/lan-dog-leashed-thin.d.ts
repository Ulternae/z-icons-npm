import React from 'react';

export interface LanDogLeashedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDogLeashedThin: React.FC<LanDogLeashedThinProps>;
export default LanDogLeashedThin;
