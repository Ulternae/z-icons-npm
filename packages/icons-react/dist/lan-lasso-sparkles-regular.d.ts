import React from 'react';

export interface LanLassoSparklesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLassoSparklesRegular: React.FC<LanLassoSparklesRegularProps>;
export default LanLassoSparklesRegular;
