import React from 'react';

export interface CoreCloudBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCloudBoltSolid: React.FC<CoreCloudBoltSolidProps>;
export default CoreCloudBoltSolid;
