import React from 'react';

export interface LanCarTunnelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarTunnelThin: React.FC<LanCarTunnelThinProps>;
export default LanCarTunnelThin;
