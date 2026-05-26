import React from 'react';

export interface LanCircleVThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleVThin: React.FC<LanCircleVThinProps>;
export default LanCircleVThin;
