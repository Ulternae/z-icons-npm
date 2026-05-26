import React from 'react';

export interface LanCloudShowersHeavySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersHeavySolid: React.FC<LanCloudShowersHeavySolidProps>;
export default LanCloudShowersHeavySolid;
