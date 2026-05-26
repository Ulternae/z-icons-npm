import React from 'react';

export interface LanUserGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroupSolid: React.FC<LanUserGroupSolidProps>;
export default LanUserGroupSolid;
