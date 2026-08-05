import React from 'react';

export interface LanCarTunnelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarTunnel(props: LanCarTunnelProps): React.ReactElement;
export default LanCarTunnel;
