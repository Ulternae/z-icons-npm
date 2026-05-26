import React from 'react';

export interface LanLandmarkFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkFlagThin: React.FC<LanLandmarkFlagThinProps>;
export default LanLandmarkFlagThin;
