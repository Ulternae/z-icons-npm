import React from 'react';

export interface LanLassoSparklesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLassoSparklesThin(props: LanLassoSparklesThinProps): React.ReactElement;
export default LanLassoSparklesThin;
