import React from 'react';

export interface LanGlobeWifiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeWifiThin(props: LanGlobeWifiThinProps): React.ReactElement;
export default LanGlobeWifiThin;
