import React from 'react';

export interface CoreCloudSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudSnowSolid: React.FC<CoreCloudSnowSolidProps>;
export default CoreCloudSnowSolid;
