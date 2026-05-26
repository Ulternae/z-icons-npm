import React from 'react';

export interface LanFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterSolid: React.FC<LanFilterSolidProps>;
export default LanFilterSolid;
