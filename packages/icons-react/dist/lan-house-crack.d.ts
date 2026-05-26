import React from 'react';

export interface LanHouseCrackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseCrack: React.FC<LanHouseCrackProps>;
export default LanHouseCrack;
