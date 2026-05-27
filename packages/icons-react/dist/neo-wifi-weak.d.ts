import React from 'react';

export interface NeoWifiWeakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoWifiWeak: React.FC<NeoWifiWeakProps>;
export default NeoWifiWeak;
