import React from 'react';

export interface LanLandmarkFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkFlagSolid: React.FC<LanLandmarkFlagSolidProps>;
export default LanLandmarkFlagSolid;
