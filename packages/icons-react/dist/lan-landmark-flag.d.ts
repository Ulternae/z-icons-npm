import React from 'react';

export interface LanLandmarkFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkFlag: React.FC<LanLandmarkFlagProps>;
export default LanLandmarkFlag;
