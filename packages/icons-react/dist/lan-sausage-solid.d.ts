import React from 'react';

export interface LanSausageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSausageSolid: React.FC<LanSausageSolidProps>;
export default LanSausageSolid;
