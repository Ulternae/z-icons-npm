import React from 'react';

export interface LanLassoSparklesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLassoSparkles: React.FC<LanLassoSparklesProps>;
export default LanLassoSparkles;
