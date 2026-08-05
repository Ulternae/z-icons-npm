import React from 'react';

export interface LanCarTunnelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarTunnelSolid(props: LanCarTunnelSolidProps): React.ReactElement;
export default LanCarTunnelSolid;
