import React from 'react';

export interface LanBackwardFastProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBackwardFast: React.FC<LanBackwardFastProps>;
export default LanBackwardFast;
