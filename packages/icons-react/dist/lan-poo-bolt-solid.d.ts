import React from 'react';

export interface LanPooBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPooBoltSolid: React.FC<LanPooBoltSolidProps>;
export default LanPooBoltSolid;
