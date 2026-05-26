import React from 'react';

export interface LanSchoolProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchool: React.FC<LanSchoolProps>;
export default LanSchool;
