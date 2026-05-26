import React from 'react';

export interface LanTankRecoveryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTankRecovery: React.FC<LanTankRecoveryProps>;
export default LanTankRecovery;
