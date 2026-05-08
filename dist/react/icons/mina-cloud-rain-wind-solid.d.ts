import React from 'react';

export interface MinaCloudRainWindSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudRainWindSolid: React.FC<MinaCloudRainWindSolidProps>;
export default MinaCloudRainWindSolid;
