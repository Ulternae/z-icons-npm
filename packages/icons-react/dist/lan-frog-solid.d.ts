import React from 'react';

export interface LanFrogSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrogSolid: React.FC<LanFrogSolidProps>;
export default LanFrogSolid;
