import React from 'react';

export interface LanHammerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHammerSolid: React.FC<LanHammerSolidProps>;
export default LanHammerSolid;
