import React from 'react';

export interface LanOtterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOtter: React.FC<LanOtterProps>;
export default LanOtter;
