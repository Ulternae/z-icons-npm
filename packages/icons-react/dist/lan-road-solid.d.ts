import React from 'react';

export interface LanRoadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRoadSolid: React.FC<LanRoadSolidProps>;
export default LanRoadSolid;
