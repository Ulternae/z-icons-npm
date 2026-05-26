import React from 'react';

export interface LanCloudsMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudsMoonSolid: React.FC<LanCloudsMoonSolidProps>;
export default LanCloudsMoonSolid;
