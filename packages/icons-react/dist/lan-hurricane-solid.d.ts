import React from 'react';

export interface LanHurricaneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHurricaneSolid: React.FC<LanHurricaneSolidProps>;
export default LanHurricaneSolid;
