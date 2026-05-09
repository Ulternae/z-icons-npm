import React from 'react';

export interface MinaLetterNDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNDiamond: React.FC<MinaLetterNDiamondProps>;
export default MinaLetterNDiamond;
