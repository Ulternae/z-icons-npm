import React from 'react';

export interface LanCircleWifiRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWifiRegular(props: LanCircleWifiRegularProps): React.ReactElement;
export default LanCircleWifiRegular;
