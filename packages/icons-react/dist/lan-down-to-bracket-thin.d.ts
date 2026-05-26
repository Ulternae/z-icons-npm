import React from 'react';

export interface LanDownToBracketThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownToBracketThin: React.FC<LanDownToBracketThinProps>;
export default LanDownToBracketThin;
