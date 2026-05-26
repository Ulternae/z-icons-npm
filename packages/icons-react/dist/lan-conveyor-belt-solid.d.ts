import React from 'react';

export interface LanConveyorBeltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltSolid: React.FC<LanConveyorBeltSolidProps>;
export default LanConveyorBeltSolid;
