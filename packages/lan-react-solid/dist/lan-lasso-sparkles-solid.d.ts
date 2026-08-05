import React from 'react';

export interface LanLassoSparklesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLassoSparklesSolid(props: LanLassoSparklesSolidProps): React.ReactElement;
export default LanLassoSparklesSolid;
