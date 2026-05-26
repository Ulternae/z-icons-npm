import React from 'react';

export interface LanCarTunnelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarTunnelRegular: React.FC<LanCarTunnelRegularProps>;
export default LanCarTunnelRegular;
