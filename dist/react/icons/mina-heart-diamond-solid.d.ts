import React from 'react';

export interface MinaHeartDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartDiamondSolid: React.FC<MinaHeartDiamondSolidProps>;
export default MinaHeartDiamondSolid;
