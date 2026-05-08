import React from 'react';

export interface MinaLetterFDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFDiamond: React.FC<MinaLetterFDiamondProps>;
export default MinaLetterFDiamond;
