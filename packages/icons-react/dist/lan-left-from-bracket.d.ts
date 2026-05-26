import React from 'react';

export interface LanLeftFromBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLeftFromBracket: React.FC<LanLeftFromBracketProps>;
export default LanLeftFromBracket;
