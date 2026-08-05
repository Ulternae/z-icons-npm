import React from 'react';

export interface LanCircleWifiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleWifiThin(props: LanCircleWifiThinProps): React.ReactElement;
export default LanCircleWifiThin;
