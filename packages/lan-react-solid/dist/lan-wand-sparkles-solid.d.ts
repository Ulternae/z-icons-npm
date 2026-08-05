import React from 'react';

export interface LanWandSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandSparklesSolid(props: LanWandSparklesSolidProps): React.ReactElement;
export default LanWandSparklesSolid;
