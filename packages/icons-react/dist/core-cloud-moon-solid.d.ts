import React from 'react';

export interface CoreCloudMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudMoonSolid: React.FC<CoreCloudMoonSolidProps>;
export default CoreCloudMoonSolid;
