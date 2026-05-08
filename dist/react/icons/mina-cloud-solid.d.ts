import React from 'react';

export interface MinaCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudSolid: React.FC<MinaCloudSolidProps>;
export default MinaCloudSolid;
