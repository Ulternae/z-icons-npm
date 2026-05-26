import React from 'react';

export interface LanLandmarkThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkThin: React.FC<LanLandmarkThinProps>;
export default LanLandmarkThin;
