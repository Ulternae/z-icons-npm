import React from 'react';

export interface MinaLetterGDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGDiamond: React.FC<MinaLetterGDiamondProps>;
export default MinaLetterGDiamond;
