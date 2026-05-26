import React from 'react';

export interface LanFileTexSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileTexSolid: React.FC<LanFileTexSolidProps>;
export default LanFileTexSolid;
