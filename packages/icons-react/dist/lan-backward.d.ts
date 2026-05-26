import React from 'react';

export interface LanBackwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackward: React.FC<LanBackwardProps>;
export default LanBackward;
