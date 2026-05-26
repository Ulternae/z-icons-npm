import React from 'react';

export interface LanHandSparklesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandSparklesThin: React.FC<LanHandSparklesThinProps>;
export default LanHandSparklesThin;
