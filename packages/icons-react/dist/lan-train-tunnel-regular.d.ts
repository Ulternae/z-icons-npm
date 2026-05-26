import React from 'react';

export interface LanTrainTunnelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTrainTunnelRegular: React.FC<LanTrainTunnelRegularProps>;
export default LanTrainTunnelRegular;
