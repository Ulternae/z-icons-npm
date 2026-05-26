import React from 'react';

export interface LanSchoolCircleCheckRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolCircleCheckRegular: React.FC<LanSchoolCircleCheckRegularProps>;
export default LanSchoolCircleCheckRegular;
