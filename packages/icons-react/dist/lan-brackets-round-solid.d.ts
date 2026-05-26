import React from 'react';

export interface LanBracketsRoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketsRoundSolid: React.FC<LanBracketsRoundSolidProps>;
export default LanBracketsRoundSolid;
