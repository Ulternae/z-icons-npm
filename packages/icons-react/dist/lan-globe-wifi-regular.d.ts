import React from 'react';

export interface LanGlobeWifiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeWifiRegular: React.FC<LanGlobeWifiRegularProps>;
export default LanGlobeWifiRegular;
