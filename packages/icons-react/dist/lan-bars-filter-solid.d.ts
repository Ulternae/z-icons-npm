import React from 'react';

export interface LanBarsFilterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarsFilterSolid: React.FC<LanBarsFilterSolidProps>;
export default LanBarsFilterSolid;
