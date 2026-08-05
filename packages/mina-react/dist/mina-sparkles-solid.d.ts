import React from 'react';

export interface MinaSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSparklesSolid(props: MinaSparklesSolidProps): React.ReactElement;
export default MinaSparklesSolid;
