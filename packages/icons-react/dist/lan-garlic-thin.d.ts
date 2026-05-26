import React from 'react';

export interface LanGarlicThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarlicThin: React.FC<LanGarlicThinProps>;
export default LanGarlicThin;
