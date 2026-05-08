import React from 'react';

export interface MinaUserDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaUserDiamond: React.FC<MinaUserDiamondProps>;
export default MinaUserDiamond;
