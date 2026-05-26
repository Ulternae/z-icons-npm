import React from 'react';

export interface LanSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSparklesSolid: React.FC<LanSparklesSolidProps>;
export default LanSparklesSolid;
