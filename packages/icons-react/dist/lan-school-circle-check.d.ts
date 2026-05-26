import React from 'react';

export interface LanSchoolCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolCircleCheck: React.FC<LanSchoolCircleCheckProps>;
export default LanSchoolCircleCheck;
