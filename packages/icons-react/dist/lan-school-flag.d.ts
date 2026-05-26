import React from 'react';

export interface LanSchoolFlagProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolFlag: React.FC<LanSchoolFlagProps>;
export default LanSchoolFlag;
