import React from 'react';

export interface LanSchoolRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolRegular: React.FC<LanSchoolRegularProps>;
export default LanSchoolRegular;
