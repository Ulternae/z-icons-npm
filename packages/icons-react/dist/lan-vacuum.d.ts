import React from 'react';

export interface LanVacuumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVacuum: React.FC<LanVacuumProps>;
export default LanVacuum;
