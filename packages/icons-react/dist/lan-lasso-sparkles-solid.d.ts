import React from 'react';

export interface LanLassoSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLassoSparklesSolid: React.FC<LanLassoSparklesSolidProps>;
export default LanLassoSparklesSolid;
