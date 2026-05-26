import React from 'react';

export interface LanUpFromBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUpFromBracket: React.FC<LanUpFromBracketProps>;
export default LanUpFromBracket;
