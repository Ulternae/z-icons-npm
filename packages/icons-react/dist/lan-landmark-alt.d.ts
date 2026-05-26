import React from 'react';

export interface LanLandmarkAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkAlt: React.FC<LanLandmarkAltProps>;
export default LanLandmarkAlt;
