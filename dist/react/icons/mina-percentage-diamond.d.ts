import React from 'react';

export interface MinaPercentageDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPercentageDiamond: React.FC<MinaPercentageDiamondProps>;
export default MinaPercentageDiamond;
