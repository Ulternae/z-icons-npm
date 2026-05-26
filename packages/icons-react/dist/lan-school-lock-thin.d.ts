import React from 'react';

export interface LanSchoolLockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolLockThin: React.FC<LanSchoolLockThinProps>;
export default LanSchoolLockThin;
