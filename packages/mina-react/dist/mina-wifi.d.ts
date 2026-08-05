import React from 'react';

export interface MinaWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifi(props: MinaWifiProps): React.ReactElement;
export default MinaWifi;
