import React from 'react';

export interface MinaLetterJDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJDiamond: React.FC<MinaLetterJDiamondProps>;
export default MinaLetterJDiamond;
