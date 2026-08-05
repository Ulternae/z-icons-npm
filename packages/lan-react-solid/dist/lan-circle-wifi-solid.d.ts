import React from 'react';

export interface LanCircleWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWifiSolid(props: LanCircleWifiSolidProps): React.ReactElement;
export default LanCircleWifiSolid;
