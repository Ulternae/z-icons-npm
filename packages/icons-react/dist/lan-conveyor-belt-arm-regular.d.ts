import React from 'react';

export interface LanConveyorBeltArmRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltArmRegular: React.FC<LanConveyorBeltArmRegularProps>;
export default LanConveyorBeltArmRegular;
