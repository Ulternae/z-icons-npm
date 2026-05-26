import React from 'react';

export interface LanGuitarElectricSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGuitarElectricSolid: React.FC<LanGuitarElectricSolidProps>;
export default LanGuitarElectricSolid;
