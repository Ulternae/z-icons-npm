import React from 'react';

export interface LanTrainTunnelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTunnelThin: React.FC<LanTrainTunnelThinProps>;
export default LanTrainTunnelThin;
