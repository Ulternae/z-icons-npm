import React from 'react';

export interface MinaLetterEDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterEDiamond: React.FC<MinaLetterEDiamondProps>;
export default MinaLetterEDiamond;
