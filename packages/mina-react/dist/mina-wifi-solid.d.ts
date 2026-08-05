import React from 'react';

export interface MinaWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiSolid(props: MinaWifiSolidProps): React.ReactElement;
export default MinaWifiSolid;
