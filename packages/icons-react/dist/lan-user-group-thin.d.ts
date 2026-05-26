import React from 'react';

export interface LanUserGroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroupThin: React.FC<LanUserGroupThinProps>;
export default LanUserGroupThin;
