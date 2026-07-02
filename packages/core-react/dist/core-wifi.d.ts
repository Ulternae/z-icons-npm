import React from 'react';

export interface CoreWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreWifi(props: CoreWifiProps): React.ReactElement;
export default CoreWifi;
