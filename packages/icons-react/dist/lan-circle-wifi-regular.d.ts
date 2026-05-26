import React from 'react';

export interface LanCircleWifiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleWifiRegular: React.FC<LanCircleWifiRegularProps>;
export default LanCircleWifiRegular;
