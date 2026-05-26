import React from 'react';

export interface LanPeopleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleSolid: React.FC<LanPeopleSolidProps>;
export default LanPeopleSolid;
