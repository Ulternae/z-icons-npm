import React from 'react';

export interface MinaWifiLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiLow: React.FC<MinaWifiLowProps>;
export default MinaWifiLow;
