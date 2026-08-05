import React from 'react';

export interface MinaWifiMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiMinus(props: MinaWifiMinusProps): React.ReactElement;
export default MinaWifiMinus;
