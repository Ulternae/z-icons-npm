import React from 'react';

export interface LanSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSparklesSolid(props: LanSparklesSolidProps): React.ReactElement;
export default LanSparklesSolid;
