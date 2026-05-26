import React from 'react';

export interface LanLassoSparklesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLassoSparklesThin: React.FC<LanLassoSparklesThinProps>;
export default LanLassoSparklesThin;
