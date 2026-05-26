import React from 'react';

export interface LanUsdCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsdCircle: React.FC<LanUsdCircleProps>;
export default LanUsdCircle;
