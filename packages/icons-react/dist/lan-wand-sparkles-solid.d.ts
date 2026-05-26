import React from 'react';

export interface LanWandSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandSparklesSolid: React.FC<LanWandSparklesSolidProps>;
export default LanWandSparklesSolid;
