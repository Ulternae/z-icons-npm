import React from 'react';

export interface LanCarTunnelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarTunnelRegular(props: LanCarTunnelRegularProps): React.ReactElement;
export default LanCarTunnelRegular;
