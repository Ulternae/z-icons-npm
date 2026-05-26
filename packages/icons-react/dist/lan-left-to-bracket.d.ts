import React from 'react';

export interface LanLeftToBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeftToBracket: React.FC<LanLeftToBracketProps>;
export default LanLeftToBracket;
