import React from 'react';

export interface LanHandSparklesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandSparklesThin(props: LanHandSparklesThinProps): React.ReactElement;
export default LanHandSparklesThin;
