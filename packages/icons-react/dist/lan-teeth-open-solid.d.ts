import React from 'react';

export interface LanTeethOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTeethOpenSolid: React.FC<LanTeethOpenSolidProps>;
export default LanTeethOpenSolid;
