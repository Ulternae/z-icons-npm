import React from 'react';

export interface MinaRupeeDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeDiamond: React.FC<MinaRupeeDiamondProps>;
export default MinaRupeeDiamond;
