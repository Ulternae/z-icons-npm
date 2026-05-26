import React from 'react';

export interface LanSynagogueSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSynagogueSolid: React.FC<LanSynagogueSolidProps>;
export default LanSynagogueSolid;
