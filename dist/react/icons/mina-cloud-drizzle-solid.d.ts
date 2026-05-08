import React from 'react';

export interface MinaCloudDrizzleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudDrizzleSolid: React.FC<MinaCloudDrizzleSolidProps>;
export default MinaCloudDrizzleSolid;
