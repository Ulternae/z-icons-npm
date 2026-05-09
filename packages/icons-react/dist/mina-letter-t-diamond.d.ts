import React from 'react';

export interface MinaLetterTDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTDiamond: React.FC<MinaLetterTDiamondProps>;
export default MinaLetterTDiamond;
