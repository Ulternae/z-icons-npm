import React from 'react';

export interface LanLandmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmark: React.FC<LanLandmarkProps>;
export default LanLandmark;
