import React from 'react';

export interface LanUsdCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsdCircleRegular: React.FC<LanUsdCircleRegularProps>;
export default LanUsdCircleRegular;
