import React from 'react';

export interface LanVacuumThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVacuumThin: React.FC<LanVacuumThinProps>;
export default LanVacuumThin;
