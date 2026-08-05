import React from 'react';

export interface LanSparklesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSparklesThin(props: LanSparklesThinProps): React.ReactElement;
export default LanSparklesThin;
