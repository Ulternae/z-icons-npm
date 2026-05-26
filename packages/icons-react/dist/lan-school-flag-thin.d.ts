import React from 'react';

export interface LanSchoolFlagThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolFlagThin: React.FC<LanSchoolFlagThinProps>;
export default LanSchoolFlagThin;
