import React from 'react';

export interface MinaSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSparklesSolid: React.FC<MinaSparklesSolidProps>;
export default MinaSparklesSolid;
