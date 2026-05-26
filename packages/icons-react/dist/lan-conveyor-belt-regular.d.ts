import React from 'react';

export interface LanConveyorBeltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltRegular: React.FC<LanConveyorBeltRegularProps>;
export default LanConveyorBeltRegular;
