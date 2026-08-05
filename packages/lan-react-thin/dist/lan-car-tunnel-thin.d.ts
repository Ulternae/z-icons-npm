import React from 'react';

export interface LanCarTunnelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarTunnelThin(props: LanCarTunnelThinProps): React.ReactElement;
export default LanCarTunnelThin;
