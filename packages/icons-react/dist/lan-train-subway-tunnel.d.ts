import React from 'react';

export interface LanTrainSubwayTunnelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainSubwayTunnel: React.FC<LanTrainSubwayTunnelProps>;
export default LanTrainSubwayTunnel;
