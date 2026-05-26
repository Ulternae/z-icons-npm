import React from 'react';

export interface LanLandmarkAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkAltThin: React.FC<LanLandmarkAltThinProps>;
export default LanLandmarkAltThin;
