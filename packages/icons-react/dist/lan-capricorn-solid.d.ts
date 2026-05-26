import React from 'react';

export interface LanCapricornSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCapricornSolid: React.FC<LanCapricornSolidProps>;
export default LanCapricornSolid;
