import React from 'react';

export interface LanMushroomSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMushroomSolid: React.FC<LanMushroomSolidProps>;
export default LanMushroomSolid;
