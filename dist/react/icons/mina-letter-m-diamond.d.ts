import React from 'react';

export interface MinaLetterMDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMDiamond: React.FC<MinaLetterMDiamondProps>;
export default MinaLetterMDiamond;
