import React from 'react';

export interface CoreWifiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWifiSolid: React.FC<CoreWifiSolidProps>;
export default CoreWifiSolid;
