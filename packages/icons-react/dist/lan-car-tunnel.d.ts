import React from 'react';

export interface LanCarTunnelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarTunnel: React.FC<LanCarTunnelProps>;
export default LanCarTunnel;
