import React from 'react';

export interface NeoWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoWifi(props: NeoWifiProps): React.ReactElement;
export default NeoWifi;
