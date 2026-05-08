import React from 'react';

export interface MinaHeartDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHeartDiamond: React.FC<MinaHeartDiamondProps>;
export default MinaHeartDiamond;
