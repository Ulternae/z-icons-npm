import React from 'react';

export interface LanFilterListSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterListSolid: React.FC<LanFilterListSolidProps>;
export default LanFilterListSolid;
