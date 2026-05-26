import React from 'react';

export interface LanFastForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFastForward: React.FC<LanFastForwardProps>;
export default LanFastForward;
