import React from 'react';

export interface LanMushroomProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMushroom: React.FC<LanMushroomProps>;
export default LanMushroom;
