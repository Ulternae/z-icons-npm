import React from 'react';

export interface LanMushroomThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMushroomThin: React.FC<LanMushroomThinProps>;
export default LanMushroomThin;
