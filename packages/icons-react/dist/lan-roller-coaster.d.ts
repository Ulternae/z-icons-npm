import React from 'react';

export interface LanRollerCoasterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRollerCoaster: React.FC<LanRollerCoasterProps>;
export default LanRollerCoaster;
