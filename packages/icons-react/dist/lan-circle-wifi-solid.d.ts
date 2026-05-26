import React from 'react';

export interface LanCircleWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWifiSolid: React.FC<LanCircleWifiSolidProps>;
export default LanCircleWifiSolid;
