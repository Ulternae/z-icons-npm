import React from 'react';

export interface LanDownToBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownToBracket: React.FC<LanDownToBracketProps>;
export default LanDownToBracket;
