import React from 'react';

export interface MinaLetterRDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRDiamond: React.FC<MinaLetterRDiamondProps>;
export default MinaLetterRDiamond;
