import React from 'react';

export interface MinaWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiSolid: React.FC<MinaWifiSolidProps>;
export default MinaWifiSolid;
