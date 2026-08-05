import React from 'react';

export interface LanTrainTunnelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTunnelSolid(props: LanTrainTunnelSolidProps): React.ReactElement;
export default LanTrainTunnelSolid;
