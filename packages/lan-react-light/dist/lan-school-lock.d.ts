import React from 'react';

export interface LanSchoolLockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolLock(props: LanSchoolLockProps): React.ReactElement;
export default LanSchoolLock;
