import React from 'react';

export interface LanSchoolLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolLock: React.FC<LanSchoolLockProps>;
export default LanSchoolLock;
