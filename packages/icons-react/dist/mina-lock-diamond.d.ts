import React from 'react';

export interface MinaLockDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockDiamond: React.FC<MinaLockDiamondProps>;
export default MinaLockDiamond;
