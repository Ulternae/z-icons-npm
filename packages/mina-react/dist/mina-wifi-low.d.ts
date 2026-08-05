import React from 'react';

export interface MinaWifiLowProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiLow(props: MinaWifiLowProps): React.ReactElement;
export default MinaWifiLow;
