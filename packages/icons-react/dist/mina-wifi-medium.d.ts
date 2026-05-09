import React from 'react';

export interface MinaWifiMediumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiMedium: React.FC<MinaWifiMediumProps>;
export default MinaWifiMedium;
