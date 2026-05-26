import React from 'react';

export interface LanDiamondHalfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondHalfRegular: React.FC<LanDiamondHalfRegularProps>;
export default LanDiamondHalfRegular;
