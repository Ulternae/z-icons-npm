import React from 'react';

export interface MinaLetterUDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUDiamond: React.FC<MinaLetterUDiamondProps>;
export default MinaLetterUDiamond;
