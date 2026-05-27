import React from 'react';

export interface CoreCloudSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudSolid: React.FC<CoreCloudSolidProps>;
export default CoreCloudSolid;
