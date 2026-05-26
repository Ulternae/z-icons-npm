import React from 'react';

export interface LanShareAllSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShareAllSolid: React.FC<LanShareAllSolidProps>;
export default LanShareAllSolid;
