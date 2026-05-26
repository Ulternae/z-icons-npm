import React from 'react';

export interface LanConveyorBeltEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltEmpty: React.FC<LanConveyorBeltEmptyProps>;
export default LanConveyorBeltEmpty;
