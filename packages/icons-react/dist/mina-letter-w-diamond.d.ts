import React from 'react';

export interface MinaLetterWDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterWDiamond: React.FC<MinaLetterWDiamondProps>;
export default MinaLetterWDiamond;
