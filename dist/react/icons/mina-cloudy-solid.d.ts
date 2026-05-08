import React from 'react';

export interface MinaCloudySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudySolid: React.FC<MinaCloudySolidProps>;
export default MinaCloudySolid;
