import React from 'react';

export interface LanBarProgressQuarterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressQuarterSolid: React.FC<LanBarProgressQuarterSolidProps>;
export default LanBarProgressQuarterSolid;
