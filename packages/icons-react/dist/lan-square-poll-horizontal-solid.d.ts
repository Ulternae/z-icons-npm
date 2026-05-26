import React from 'react';

export interface LanSquarePollHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePollHorizontalSolid: React.FC<LanSquarePollHorizontalSolidProps>;
export default LanSquarePollHorizontalSolid;
