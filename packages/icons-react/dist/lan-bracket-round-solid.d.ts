import React from 'react';

export interface LanBracketRoundSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketRoundSolid: React.FC<LanBracketRoundSolidProps>;
export default LanBracketRoundSolid;
