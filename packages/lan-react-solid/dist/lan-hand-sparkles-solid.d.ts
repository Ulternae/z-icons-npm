import React from 'react';

export interface LanHandSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandSparklesSolid(props: LanHandSparklesSolidProps): React.ReactElement;
export default LanHandSparklesSolid;
