import React from 'react';

export interface LanCancerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCancer: React.FC<LanCancerProps>;
export default LanCancer;
