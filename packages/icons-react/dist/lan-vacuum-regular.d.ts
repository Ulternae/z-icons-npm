import React from 'react';

export interface LanVacuumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVacuumRegular: React.FC<LanVacuumRegularProps>;
export default LanVacuumRegular;
