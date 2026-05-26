import React from 'react';

export interface LanMemoPadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMemoPad: React.FC<LanMemoPadProps>;
export default LanMemoPad;
