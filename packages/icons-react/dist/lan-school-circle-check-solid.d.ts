import React from 'react';

export interface LanSchoolCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolCircleCheckSolid: React.FC<LanSchoolCircleCheckSolidProps>;
export default LanSchoolCircleCheckSolid;
