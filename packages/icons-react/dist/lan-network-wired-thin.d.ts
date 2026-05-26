import React from 'react';

export interface LanNetworkWiredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNetworkWiredThin: React.FC<LanNetworkWiredThinProps>;
export default LanNetworkWiredThin;
