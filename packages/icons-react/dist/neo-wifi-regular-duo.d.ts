import React from 'react';

export interface NeoWifiRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWifiRegularDuo: React.FC<NeoWifiRegularDuoProps>;
export default NeoWifiRegularDuo;
