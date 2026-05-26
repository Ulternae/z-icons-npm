import React from 'react';

export interface LanSwordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSwordSolid: React.FC<LanSwordSolidProps>;
export default LanSwordSolid;
