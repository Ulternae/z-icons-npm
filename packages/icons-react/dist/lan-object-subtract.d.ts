import React from 'react';

export interface LanObjectSubtractProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanObjectSubtract: React.FC<LanObjectSubtractProps>;
export default LanObjectSubtract;
