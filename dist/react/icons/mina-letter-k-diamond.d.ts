import React from 'react';

export interface MinaLetterKDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKDiamond: React.FC<MinaLetterKDiamondProps>;
export default MinaLetterKDiamond;
