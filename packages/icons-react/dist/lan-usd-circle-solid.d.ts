import React from 'react';

export interface LanUsdCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsdCircleSolid: React.FC<LanUsdCircleSolidProps>;
export default LanUsdCircleSolid;
