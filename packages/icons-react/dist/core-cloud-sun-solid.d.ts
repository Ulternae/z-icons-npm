import React from 'react';

export interface CoreCloudSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudSunSolid: React.FC<CoreCloudSunSolidProps>;
export default CoreCloudSunSolid;
