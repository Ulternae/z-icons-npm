import React from 'react';

export interface LanCircleWifiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWifiThin: React.FC<LanCircleWifiThinProps>;
export default LanCircleWifiThin;
