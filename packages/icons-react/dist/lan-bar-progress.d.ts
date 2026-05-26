import React from 'react';

export interface LanBarProgressProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgress: React.FC<LanBarProgressProps>;
export default LanBarProgress;
