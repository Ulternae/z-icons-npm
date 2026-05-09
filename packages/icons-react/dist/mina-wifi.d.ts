import React from 'react';

export interface MinaWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifi: React.FC<MinaWifiProps>;
export default MinaWifi;
