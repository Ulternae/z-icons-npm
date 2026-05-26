import React from 'react';

export interface LanNetworkWiredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNetworkWired: React.FC<LanNetworkWiredProps>;
export default LanNetworkWired;
