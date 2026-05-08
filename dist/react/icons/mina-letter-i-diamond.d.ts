import React from 'react';

export interface MinaLetterIDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterIDiamond: React.FC<MinaLetterIDiamondProps>;
export default MinaLetterIDiamond;
