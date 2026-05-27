import React from 'react';

export interface CoreWifiRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWifiRegularDuo: React.FC<CoreWifiRegularDuoProps>;
export default CoreWifiRegularDuo;
