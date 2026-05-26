import React from 'react';

export interface LanCloudShowersWaterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloudShowersWaterSolid: React.FC<LanCloudShowersWaterSolidProps>;
export default LanCloudShowersWaterSolid;
