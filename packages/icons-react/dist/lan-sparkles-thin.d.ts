import React from 'react';

export interface LanSparklesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSparklesThin: React.FC<LanSparklesThinProps>;
export default LanSparklesThin;
