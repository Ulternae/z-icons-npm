import React from 'react';

export interface LanNetworkWiredSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNetworkWiredSolid(props: LanNetworkWiredSolidProps): React.ReactElement;
export default LanNetworkWiredSolid;
