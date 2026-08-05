import React from 'react';

export interface NeoSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSparklesSolid(props: NeoSparklesSolidProps): React.ReactElement;
export default NeoSparklesSolid;
