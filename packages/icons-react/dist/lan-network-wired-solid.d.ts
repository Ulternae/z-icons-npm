import React from 'react';

export interface LanNetworkWiredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNetworkWiredSolid: React.FC<LanNetworkWiredSolidProps>;
export default LanNetworkWiredSolid;
