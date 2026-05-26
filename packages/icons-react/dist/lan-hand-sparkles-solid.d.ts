import React from 'react';

export interface LanHandSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandSparklesSolid: React.FC<LanHandSparklesSolidProps>;
export default LanHandSparklesSolid;
