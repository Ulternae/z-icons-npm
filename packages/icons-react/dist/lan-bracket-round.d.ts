import React from 'react';

export interface LanBracketRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketRound: React.FC<LanBracketRoundProps>;
export default LanBracketRound;
