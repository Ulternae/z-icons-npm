import React from 'react';

export interface LanMillSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMillSignSolid: React.FC<LanMillSignSolidProps>;
export default LanMillSignSolid;
