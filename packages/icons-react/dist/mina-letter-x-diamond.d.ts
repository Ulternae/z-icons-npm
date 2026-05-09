import React from 'react';

export interface MinaLetterXDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXDiamond: React.FC<MinaLetterXDiamondProps>;
export default MinaLetterXDiamond;
