import React from 'react';

export interface LanWindowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowSolid: React.FC<LanWindowSolidProps>;
export default LanWindowSolid;
