import React from 'react';

export interface LanSquarePollVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePollVerticalSolid: React.FC<LanSquarePollVerticalSolidProps>;
export default LanSquarePollVerticalSolid;
