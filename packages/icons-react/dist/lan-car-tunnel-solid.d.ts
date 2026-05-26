import React from 'react';

export interface LanCarTunnelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarTunnelSolid: React.FC<LanCarTunnelSolidProps>;
export default LanCarTunnelSolid;
