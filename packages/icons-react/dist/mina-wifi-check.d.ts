import React from 'react';

export interface MinaWifiCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiCheck: React.FC<MinaWifiCheckProps>;
export default MinaWifiCheck;
