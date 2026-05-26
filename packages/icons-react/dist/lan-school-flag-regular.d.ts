import React from 'react';

export interface LanSchoolFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolFlagRegular: React.FC<LanSchoolFlagRegularProps>;
export default LanSchoolFlagRegular;
