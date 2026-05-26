import React from 'react';

export interface LanWandSparklesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandSparklesThin: React.FC<LanWandSparklesThinProps>;
export default LanWandSparklesThin;
