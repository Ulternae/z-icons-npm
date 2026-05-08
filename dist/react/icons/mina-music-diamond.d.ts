import React from 'react';

export interface MinaMusicDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicDiamond: React.FC<MinaMusicDiamondProps>;
export default MinaMusicDiamond;
