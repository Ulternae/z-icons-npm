import React from 'react';

export interface LanLandmarkAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLandmarkAltSolid: React.FC<LanLandmarkAltSolidProps>;
export default LanLandmarkAltSolid;
