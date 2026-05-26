import React from 'react';

export interface LanCloudCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudCheckSolid: React.FC<LanCloudCheckSolidProps>;
export default LanCloudCheckSolid;
