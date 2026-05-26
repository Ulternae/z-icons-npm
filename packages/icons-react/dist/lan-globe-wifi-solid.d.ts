import React from 'react';

export interface LanGlobeWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGlobeWifiSolid: React.FC<LanGlobeWifiSolidProps>;
export default LanGlobeWifiSolid;
