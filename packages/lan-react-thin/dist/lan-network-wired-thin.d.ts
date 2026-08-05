import React from 'react';

export interface LanNetworkWiredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNetworkWiredThin(props: LanNetworkWiredThinProps): React.ReactElement;
export default LanNetworkWiredThin;
