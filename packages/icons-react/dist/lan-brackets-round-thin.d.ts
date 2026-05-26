import React from 'react';

export interface LanBracketsRoundThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketsRoundThin: React.FC<LanBracketsRoundThinProps>;
export default LanBracketsRoundThin;
