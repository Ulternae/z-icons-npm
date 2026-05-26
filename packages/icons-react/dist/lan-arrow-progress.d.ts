import React from 'react';

export interface LanArrowProgressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowProgress: React.FC<LanArrowProgressProps>;
export default LanArrowProgress;
