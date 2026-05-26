import React from 'react';

export interface LanGlobeWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeWifi: React.FC<LanGlobeWifiProps>;
export default LanGlobeWifi;
