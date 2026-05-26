import React from 'react';

export interface LanCauldronSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCauldronSolid: React.FC<LanCauldronSolidProps>;
export default LanCauldronSolid;
