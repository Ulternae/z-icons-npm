import React from 'react';

export interface LanPlugSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlugSolid: React.FC<LanPlugSolidProps>;
export default LanPlugSolid;
