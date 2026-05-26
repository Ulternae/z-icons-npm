import React from 'react';

export interface LanCanoePersonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCanoePersonSolid: React.FC<LanCanoePersonSolidProps>;
export default LanCanoePersonSolid;
