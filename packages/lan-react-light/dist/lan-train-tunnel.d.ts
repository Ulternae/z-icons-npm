import React from 'react';

export interface LanTrainTunnelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTunnel(props: LanTrainTunnelProps): React.ReactElement;
export default LanTrainTunnel;
