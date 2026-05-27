import React from 'react';

export interface NeoWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWifi: React.FC<NeoWifiProps>;
export default NeoWifi;
