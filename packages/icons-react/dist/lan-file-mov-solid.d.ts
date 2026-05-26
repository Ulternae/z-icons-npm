import React from 'react';

export interface LanFileMovSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileMovSolid: React.FC<LanFileMovSolidProps>;
export default LanFileMovSolid;
