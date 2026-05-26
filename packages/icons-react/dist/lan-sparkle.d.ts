import React from 'react';

export interface LanSparkleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSparkle: React.FC<LanSparkleProps>;
export default LanSparkle;
