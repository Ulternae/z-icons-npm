import React from 'react';

export interface LanHeartCrackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartCrackSolid: React.FC<LanHeartCrackSolidProps>;
export default LanHeartCrackSolid;
