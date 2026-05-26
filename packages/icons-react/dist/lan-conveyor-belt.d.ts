import React from 'react';

export interface LanConveyorBeltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBelt: React.FC<LanConveyorBeltProps>;
export default LanConveyorBelt;
