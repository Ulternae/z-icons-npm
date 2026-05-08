import React from 'react';

export interface MinaMinusDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusDiamond: React.FC<MinaMinusDiamondProps>;
export default MinaMinusDiamond;
