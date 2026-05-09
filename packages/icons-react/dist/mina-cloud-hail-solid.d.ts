import React from 'react';

export interface MinaCloudHailSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCloudHailSolid: React.FC<MinaCloudHailSolidProps>;
export default MinaCloudHailSolid;
