import React from 'react';

export interface LanOtterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOtterSolid: React.FC<LanOtterSolidProps>;
export default LanOtterSolid;
