import React from 'react';

export interface LanDownUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDownUpSolid: React.FC<LanDownUpSolidProps>;
export default LanDownUpSolid;
