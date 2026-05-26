import React from 'react';

export interface LanConveyorBeltEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltEmptyThin: React.FC<LanConveyorBeltEmptyThinProps>;
export default LanConveyorBeltEmptyThin;
