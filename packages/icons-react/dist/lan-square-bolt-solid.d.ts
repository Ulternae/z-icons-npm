import React from 'react';

export interface LanSquareBoltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareBoltSolid: React.FC<LanSquareBoltSolidProps>;
export default LanSquareBoltSolid;
