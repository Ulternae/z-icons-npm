import React from 'react';

export interface LanMoneyFromBracketProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMoneyFromBracket: React.FC<LanMoneyFromBracketProps>;
export default LanMoneyFromBracket;
