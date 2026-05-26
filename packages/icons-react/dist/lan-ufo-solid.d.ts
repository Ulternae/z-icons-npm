import React from 'react';

export interface LanUfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUfoSolid: React.FC<LanUfoSolidProps>;
export default LanUfoSolid;
