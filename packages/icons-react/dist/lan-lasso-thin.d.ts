import React from 'react';

export interface LanLassoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLassoThin: React.FC<LanLassoThinProps>;
export default LanLassoThin;
