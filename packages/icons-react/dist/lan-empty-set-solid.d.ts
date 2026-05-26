import React from 'react';

export interface LanEmptySetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEmptySetSolid: React.FC<LanEmptySetSolidProps>;
export default LanEmptySetSolid;
