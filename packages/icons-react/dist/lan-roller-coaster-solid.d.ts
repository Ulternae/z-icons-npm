import React from 'react';

export interface LanRollerCoasterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRollerCoasterSolid: React.FC<LanRollerCoasterSolidProps>;
export default LanRollerCoasterSolid;
