import React from 'react';

export interface MinaWifiLowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiLowSolid(props: MinaWifiLowSolidProps): React.ReactElement;
export default MinaWifiLowSolid;
