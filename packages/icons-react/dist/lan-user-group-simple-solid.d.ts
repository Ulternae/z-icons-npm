import React from 'react';

export interface LanUserGroupSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserGroupSimpleSolid: React.FC<LanUserGroupSimpleSolidProps>;
export default LanUserGroupSimpleSolid;
