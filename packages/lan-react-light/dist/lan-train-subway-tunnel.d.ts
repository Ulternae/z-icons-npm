import React from 'react';

export interface LanTrainSubwayTunnelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainSubwayTunnel(props: LanTrainSubwayTunnelProps): React.ReactElement;
export default LanTrainSubwayTunnel;
