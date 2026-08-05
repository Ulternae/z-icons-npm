import React from 'react';

export interface MinaWifiPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiPlus(props: MinaWifiPlusProps): React.ReactElement;
export default MinaWifiPlus;
