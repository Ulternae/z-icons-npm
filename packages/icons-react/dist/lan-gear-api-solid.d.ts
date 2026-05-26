import React from 'react';

export interface LanGearApiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGearApiSolid: React.FC<LanGearApiSolidProps>;
export default LanGearApiSolid;
