import React from 'react';

export interface MinaWifiXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiX: React.FC<MinaWifiXProps>;
export default MinaWifiX;
