import React from 'react';

export interface MinaLetterPDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPDiamond: React.FC<MinaLetterPDiamondProps>;
export default MinaLetterPDiamond;
