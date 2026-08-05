import React from 'react';

export interface LanConveyorBeltArmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanConveyorBeltArmSolid(props: LanConveyorBeltArmSolidProps): React.ReactElement;
export default LanConveyorBeltArmSolid;
