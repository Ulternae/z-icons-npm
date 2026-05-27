import React from 'react';

export interface CoreSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreSparklesSolid: React.FC<CoreSparklesSolidProps>;
export default CoreSparklesSolid;
