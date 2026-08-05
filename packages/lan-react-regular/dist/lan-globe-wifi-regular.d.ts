import React from 'react';

export interface LanGlobeWifiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeWifiRegular(props: LanGlobeWifiRegularProps): React.ReactElement;
export default LanGlobeWifiRegular;
