import React from 'react';

export interface LanTrainTunnelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTunnelSolid: React.FC<LanTrainTunnelSolidProps>;
export default LanTrainTunnelSolid;
