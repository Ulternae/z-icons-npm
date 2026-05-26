import React from 'react';

export interface LanPeoplePantsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePantsSolid: React.FC<LanPeoplePantsSolidProps>;
export default LanPeoplePantsSolid;
