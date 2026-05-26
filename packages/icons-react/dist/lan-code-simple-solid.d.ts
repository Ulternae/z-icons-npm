import React from 'react';

export interface LanCodeSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCodeSimpleSolid: React.FC<LanCodeSimpleSolidProps>;
export default LanCodeSimpleSolid;
