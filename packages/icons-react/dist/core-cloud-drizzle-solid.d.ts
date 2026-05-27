import React from 'react';

export interface CoreCloudDrizzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudDrizzleSolid: React.FC<CoreCloudDrizzleSolidProps>;
export default CoreCloudDrizzleSolid;
