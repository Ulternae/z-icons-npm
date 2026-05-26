import React from 'react';

export interface LanLandmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkSolid: React.FC<LanLandmarkSolidProps>;
export default LanLandmarkSolid;
