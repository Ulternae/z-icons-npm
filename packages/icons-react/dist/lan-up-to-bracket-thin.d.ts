import React from 'react';

export interface LanUpToBracketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpToBracketThin: React.FC<LanUpToBracketThinProps>;
export default LanUpToBracketThin;
