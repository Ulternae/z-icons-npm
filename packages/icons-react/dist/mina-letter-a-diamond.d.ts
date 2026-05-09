import React from 'react';

export interface MinaLetterADiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterADiamond: React.FC<MinaLetterADiamondProps>;
export default MinaLetterADiamond;
