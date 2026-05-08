import React from 'react';

export interface MinaCloudMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudMoonSolid: React.FC<MinaCloudMoonSolidProps>;
export default MinaCloudMoonSolid;
