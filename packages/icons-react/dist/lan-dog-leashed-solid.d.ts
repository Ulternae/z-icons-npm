import React from 'react';

export interface LanDogLeashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDogLeashedSolid: React.FC<LanDogLeashedSolidProps>;
export default LanDogLeashedSolid;
