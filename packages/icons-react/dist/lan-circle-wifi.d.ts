import React from 'react';

export interface LanCircleWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWifi: React.FC<LanCircleWifiProps>;
export default LanCircleWifi;
