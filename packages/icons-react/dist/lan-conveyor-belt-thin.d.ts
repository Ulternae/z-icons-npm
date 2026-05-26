import React from 'react';

export interface LanConveyorBeltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltThin: React.FC<LanConveyorBeltThinProps>;
export default LanConveyorBeltThin;
