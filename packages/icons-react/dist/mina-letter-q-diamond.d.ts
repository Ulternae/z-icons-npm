import React from 'react';

export interface MinaLetterQDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterQDiamond: React.FC<MinaLetterQDiamondProps>;
export default MinaLetterQDiamond;
