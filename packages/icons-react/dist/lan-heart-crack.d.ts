import React from 'react';

export interface LanHeartCrackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCrack: React.FC<LanHeartCrackProps>;
export default LanHeartCrack;
