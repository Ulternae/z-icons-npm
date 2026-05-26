import React from 'react';

export interface LanRamSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRamSolid: React.FC<LanRamSolidProps>;
export default LanRamSolid;
