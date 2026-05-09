import React from 'react';

export interface MinaLetterHDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHDiamond: React.FC<MinaLetterHDiamondProps>;
export default MinaLetterHDiamond;
