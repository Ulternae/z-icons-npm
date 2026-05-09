import React from 'react';

export interface MinaLetterLDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLDiamond: React.FC<MinaLetterLDiamondProps>;
export default MinaLetterLDiamond;
