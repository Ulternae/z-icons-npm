import React from 'react';

export interface LanUserGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroup: React.FC<LanUserGroupProps>;
export default LanUserGroup;
