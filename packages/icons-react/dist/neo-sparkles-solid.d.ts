import React from 'react';

export interface NeoSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSparklesSolid: React.FC<NeoSparklesSolidProps>;
export default NeoSparklesSolid;
