import React from 'react';

export interface LanPeoplePullingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePullingSolid: React.FC<LanPeoplePullingSolidProps>;
export default LanPeoplePullingSolid;
