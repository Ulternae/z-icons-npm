import React from 'react';

export interface LanConveyorBeltEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltEmptySolid: React.FC<LanConveyorBeltEmptySolidProps>;
export default LanConveyorBeltEmptySolid;
