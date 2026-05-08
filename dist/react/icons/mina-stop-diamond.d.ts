import React from 'react';

export interface MinaStopDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaStopDiamond: React.FC<MinaStopDiamondProps>;
export default MinaStopDiamond;
