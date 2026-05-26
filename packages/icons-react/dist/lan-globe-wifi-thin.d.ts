import React from 'react';

export interface LanGlobeWifiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeWifiThin: React.FC<LanGlobeWifiThinProps>;
export default LanGlobeWifiThin;
