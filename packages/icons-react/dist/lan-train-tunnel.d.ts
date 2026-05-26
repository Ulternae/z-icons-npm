import React from 'react';

export interface LanTrainTunnelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTunnel: React.FC<LanTrainTunnelProps>;
export default LanTrainTunnel;
