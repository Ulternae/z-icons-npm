import React from 'react';

export interface MinaLetterCDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCDiamond: React.FC<MinaLetterCDiamondProps>;
export default MinaLetterCDiamond;
