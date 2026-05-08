import React from 'react';

export interface MinaCloudRainSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudRainSolid: React.FC<MinaCloudRainSolidProps>;
export default MinaCloudRainSolid;
