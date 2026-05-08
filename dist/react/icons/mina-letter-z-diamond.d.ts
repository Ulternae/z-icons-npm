import React from 'react';

export interface MinaLetterZDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZDiamond: React.FC<MinaLetterZDiamondProps>;
export default MinaLetterZDiamond;
