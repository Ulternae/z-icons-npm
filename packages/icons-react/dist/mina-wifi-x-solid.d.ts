import React from 'react';

export interface MinaWifiXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiXSolid: React.FC<MinaWifiXSolidProps>;
export default MinaWifiXSolid;
