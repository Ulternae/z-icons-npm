import React from 'react';

export interface LanNetworkWiredRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNetworkWiredRegular(props: LanNetworkWiredRegularProps): React.ReactElement;
export default LanNetworkWiredRegular;
