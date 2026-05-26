import React from 'react';

export interface LanEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEquals: React.FC<LanEqualsProps>;
export default LanEquals;
