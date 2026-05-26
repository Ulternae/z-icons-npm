import React from 'react';

export interface LanUserGroupSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroupSimple: React.FC<LanUserGroupSimpleProps>;
export default LanUserGroupSimple;
