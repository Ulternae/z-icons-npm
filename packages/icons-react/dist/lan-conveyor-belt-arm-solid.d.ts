import React from 'react';

export interface LanConveyorBeltArmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltArmSolid: React.FC<LanConveyorBeltArmSolidProps>;
export default LanConveyorBeltArmSolid;
