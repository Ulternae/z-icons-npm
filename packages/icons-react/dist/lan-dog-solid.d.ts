import React from 'react';

export interface LanDogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDogSolid: React.FC<LanDogSolidProps>;
export default LanDogSolid;
