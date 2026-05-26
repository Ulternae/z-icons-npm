import React from 'react';

export interface LanDialMinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDialMin: React.FC<LanDialMinProps>;
export default LanDialMin;
