import React from 'react';

export interface LanUserGroupSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroupSimpleThin: React.FC<LanUserGroupSimpleThinProps>;
export default LanUserGroupSimpleThin;
