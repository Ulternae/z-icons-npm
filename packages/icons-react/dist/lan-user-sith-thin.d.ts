import React from 'react';

export interface LanUserSithThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserSithThin: React.FC<LanUserSithThinProps>;
export default LanUserSithThin;
