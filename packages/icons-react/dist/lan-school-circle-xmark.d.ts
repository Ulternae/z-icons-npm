import React from 'react';

export interface LanSchoolCircleXmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolCircleXmark: React.FC<LanSchoolCircleXmarkProps>;
export default LanSchoolCircleXmark;
