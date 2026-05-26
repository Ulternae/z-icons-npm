import React from 'react';

export interface LanSchoolLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolLockRegular: React.FC<LanSchoolLockRegularProps>;
export default LanSchoolLockRegular;
