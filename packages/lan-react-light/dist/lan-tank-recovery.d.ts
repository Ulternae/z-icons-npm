import React from 'react';

export interface LanTankRecoveryProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTankRecovery(props: LanTankRecoveryProps): React.ReactElement;
export default LanTankRecovery;
