import React from 'react';

export interface LanTrainTunnelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTunnelThin(props: LanTrainTunnelThinProps): React.ReactElement;
export default LanTrainTunnelThin;
