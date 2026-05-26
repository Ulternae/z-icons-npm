import React from 'react';

export interface LanNetworkWiredRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNetworkWiredRegular: React.FC<LanNetworkWiredRegularProps>;
export default LanNetworkWiredRegular;
