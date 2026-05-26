import React from 'react';

export interface LanCloudWordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudWordSolid: React.FC<LanCloudWordSolidProps>;
export default LanCloudWordSolid;
