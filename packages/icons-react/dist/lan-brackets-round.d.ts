import React from 'react';

export interface LanBracketsRoundProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketsRound: React.FC<LanBracketsRoundProps>;
export default LanBracketsRound;
