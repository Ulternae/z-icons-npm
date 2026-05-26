import React from 'react';

export interface LanTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeSolid: React.FC<LanTreeSolidProps>;
export default LanTreeSolid;
