import React from 'react';

export interface LanCloudXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudXmarkSolid: React.FC<LanCloudXmarkSolidProps>;
export default LanCloudXmarkSolid;
