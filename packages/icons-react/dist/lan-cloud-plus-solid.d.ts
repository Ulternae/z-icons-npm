import React from 'react';

export interface LanCloudPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudPlusSolid: React.FC<LanCloudPlusSolidProps>;
export default LanCloudPlusSolid;
