import React from 'react';

export interface MinaCloudSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudSnowSolid: React.FC<MinaCloudSnowSolidProps>;
export default MinaCloudSnowSolid;
