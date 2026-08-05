import React from 'react';

export interface MinaWifiCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWifiCheck(props: MinaWifiCheckProps): React.ReactElement;
export default MinaWifiCheck;
