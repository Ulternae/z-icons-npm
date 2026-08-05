import React from 'react';

export interface MinaWifiXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiXSolid(props: MinaWifiXSolidProps): React.ReactElement;
export default MinaWifiXSolid;
