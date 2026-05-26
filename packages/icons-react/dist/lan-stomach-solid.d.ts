import React from 'react';

export interface LanStomachSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStomachSolid: React.FC<LanStomachSolidProps>;
export default LanStomachSolid;
