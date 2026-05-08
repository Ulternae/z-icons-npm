import React from 'react';

export interface MinaLetterODiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterODiamond: React.FC<MinaLetterODiamondProps>;
export default MinaLetterODiamond;
