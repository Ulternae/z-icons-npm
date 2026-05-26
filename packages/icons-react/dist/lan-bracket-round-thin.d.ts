import React from 'react';

export interface LanBracketRoundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketRoundThin: React.FC<LanBracketRoundThinProps>;
export default LanBracketRoundThin;
