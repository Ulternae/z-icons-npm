import React from 'react';

export interface MinaWifiMediumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiMedium(props: MinaWifiMediumProps): React.ReactElement;
export default MinaWifiMedium;
