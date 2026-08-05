import React from 'react';

export interface LanGlobeWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlobeWifiSolid(props: LanGlobeWifiSolidProps): React.ReactElement;
export default LanGlobeWifiSolid;
