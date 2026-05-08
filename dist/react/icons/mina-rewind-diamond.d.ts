import React from 'react';

export interface MinaRewindDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRewindDiamond: React.FC<MinaRewindDiamondProps>;
export default MinaRewindDiamond;
