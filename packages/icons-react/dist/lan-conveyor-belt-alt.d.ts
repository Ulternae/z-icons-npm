import React from 'react';

export interface LanConveyorBeltAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanConveyorBeltAlt: React.FC<LanConveyorBeltAltProps>;
export default LanConveyorBeltAlt;
