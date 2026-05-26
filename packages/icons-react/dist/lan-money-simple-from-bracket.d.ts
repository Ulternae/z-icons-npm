import React from 'react';

export interface LanMoneySimpleFromBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneySimpleFromBracket: React.FC<LanMoneySimpleFromBracketProps>;
export default LanMoneySimpleFromBracket;
