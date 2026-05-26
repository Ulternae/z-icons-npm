import React from 'react';

export interface LanForwardProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanForward: React.FC<LanForwardProps>;
export default LanForward;
