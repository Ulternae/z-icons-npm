import React from 'react';

export interface LanSchoolUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSchoolUnlock(props: LanSchoolUnlockProps): React.ReactElement;
export default LanSchoolUnlock;
