import React from 'react';

export interface LanHouseCrackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseCrackSolid: React.FC<LanHouseCrackSolidProps>;
export default LanHouseCrackSolid;
