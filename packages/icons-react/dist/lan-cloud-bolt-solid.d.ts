import React from 'react';

export interface LanCloudBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudBoltSolid: React.FC<LanCloudBoltSolidProps>;
export default LanCloudBoltSolid;
