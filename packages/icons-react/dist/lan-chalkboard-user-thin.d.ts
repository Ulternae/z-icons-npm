import React from 'react';

export interface LanChalkboardUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChalkboardUserThin: React.FC<LanChalkboardUserThinProps>;
export default LanChalkboardUserThin;
