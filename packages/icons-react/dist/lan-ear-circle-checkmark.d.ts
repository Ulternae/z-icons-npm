import React from 'react';

export interface LanEarCircleCheckmarkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanEarCircleCheckmark: React.FC<LanEarCircleCheckmarkProps>;
export default LanEarCircleCheckmark;
