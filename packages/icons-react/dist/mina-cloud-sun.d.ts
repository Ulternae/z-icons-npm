import React from 'react';

export interface MinaCloudSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudSun: React.FC<MinaCloudSunProps>;
export default MinaCloudSun;
