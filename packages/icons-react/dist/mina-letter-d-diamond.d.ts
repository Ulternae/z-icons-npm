import React from 'react';

export interface MinaLetterDDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDDiamond: React.FC<MinaLetterDDiamondProps>;
export default MinaLetterDDiamond;
