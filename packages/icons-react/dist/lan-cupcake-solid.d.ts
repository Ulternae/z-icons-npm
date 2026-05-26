import React from 'react';

export interface LanCupcakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupcakeSolid: React.FC<LanCupcakeSolidProps>;
export default LanCupcakeSolid;
