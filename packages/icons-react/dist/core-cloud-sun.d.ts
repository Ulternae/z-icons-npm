import React from 'react';

export interface CoreCloudSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudSun: React.FC<CoreCloudSunProps>;
export default CoreCloudSun;
