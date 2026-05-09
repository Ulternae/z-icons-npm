import React from 'react';

export interface MinaSignalDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalDiamond: React.FC<MinaSignalDiamondProps>;
export default MinaSignalDiamond;
