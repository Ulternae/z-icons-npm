import React from 'react';

export interface LanSchoolCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolCircleCheckThin: React.FC<LanSchoolCircleCheckThinProps>;
export default LanSchoolCircleCheckThin;
