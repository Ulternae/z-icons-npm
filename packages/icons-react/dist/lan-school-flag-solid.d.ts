import React from 'react';

export interface LanSchoolFlagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolFlagSolid: React.FC<LanSchoolFlagSolidProps>;
export default LanSchoolFlagSolid;
