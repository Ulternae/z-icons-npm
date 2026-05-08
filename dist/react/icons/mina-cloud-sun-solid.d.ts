import React from 'react';

export interface MinaCloudSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudSunSolid: React.FC<MinaCloudSunSolidProps>;
export default MinaCloudSunSolid;
