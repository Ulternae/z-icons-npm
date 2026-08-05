import React from 'react';

export interface MinaWifiXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiX(props: MinaWifiXProps): React.ReactElement;
export default MinaWifiX;
