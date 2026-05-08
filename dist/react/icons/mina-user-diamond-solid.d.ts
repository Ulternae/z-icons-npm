import React from 'react';

export interface MinaUserDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserDiamondSolid: React.FC<MinaUserDiamondSolidProps>;
export default MinaUserDiamondSolid;
