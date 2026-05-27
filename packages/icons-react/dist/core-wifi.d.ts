import React from 'react';

export interface CoreWifiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWifi: React.FC<CoreWifiProps>;
export default CoreWifi;
