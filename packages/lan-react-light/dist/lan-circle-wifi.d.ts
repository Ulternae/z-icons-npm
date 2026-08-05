import React from 'react';

export interface LanCircleWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWifi(props: LanCircleWifiProps): React.ReactElement;
export default LanCircleWifi;
