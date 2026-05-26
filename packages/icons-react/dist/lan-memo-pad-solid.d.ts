import React from 'react';

export interface LanMemoPadSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoPadSolid: React.FC<LanMemoPadSolidProps>;
export default LanMemoPadSolid;
