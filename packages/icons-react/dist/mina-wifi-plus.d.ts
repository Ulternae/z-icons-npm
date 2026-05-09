import React from 'react';

export interface MinaWifiPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiPlus: React.FC<MinaWifiPlusProps>;
export default MinaWifiPlus;
