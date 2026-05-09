import React from 'react';

export interface MinaLetterBDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBDiamond: React.FC<MinaLetterBDiamondProps>;
export default MinaLetterBDiamond;
