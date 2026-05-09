import React from 'react';

export interface MinaThreeDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeDiamond: React.FC<MinaThreeDiamondProps>;
export default MinaThreeDiamond;
