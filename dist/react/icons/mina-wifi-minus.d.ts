import React from 'react';

export interface MinaWifiMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWifiMinus: React.FC<MinaWifiMinusProps>;
export default MinaWifiMinus;
