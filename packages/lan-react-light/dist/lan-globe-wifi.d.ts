import React from 'react';

export interface LanGlobeWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeWifi(props: LanGlobeWifiProps): React.ReactElement;
export default LanGlobeWifi;
