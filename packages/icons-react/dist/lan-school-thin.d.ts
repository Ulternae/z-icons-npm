import React from 'react';

export interface LanSchoolThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolThin: React.FC<LanSchoolThinProps>;
export default LanSchoolThin;
