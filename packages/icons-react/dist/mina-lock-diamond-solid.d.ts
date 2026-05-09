import React from 'react';

export interface MinaLockDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLockDiamondSolid: React.FC<MinaLockDiamondSolidProps>;
export default MinaLockDiamondSolid;
