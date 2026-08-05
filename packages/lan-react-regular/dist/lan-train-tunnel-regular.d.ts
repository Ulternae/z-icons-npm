import React from 'react';

export interface LanTrainTunnelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrainTunnelRegular(props: LanTrainTunnelRegularProps): React.ReactElement;
export default LanTrainTunnelRegular;
