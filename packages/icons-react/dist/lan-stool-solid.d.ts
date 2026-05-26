import React from 'react';

export interface LanStoolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoolSolid: React.FC<LanStoolSolidProps>;
export default LanStoolSolid;
