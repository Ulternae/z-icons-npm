import React from 'react';

export interface LanSchoolUnlockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSchoolUnlock: React.FC<LanSchoolUnlockProps>;
export default LanSchoolUnlock;
