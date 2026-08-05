import React from 'react';

export interface LanWandSparklesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWandSparklesThin(props: LanWandSparklesThinProps): React.ReactElement;
export default LanWandSparklesThin;
