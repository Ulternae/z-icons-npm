import React from 'react';

export interface LanConveyorBeltArmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBeltArm(props: LanConveyorBeltArmProps): React.ReactElement;
export default LanConveyorBeltArm;
