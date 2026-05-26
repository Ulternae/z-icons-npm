import React from 'react';

export interface LanSparkleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSparkleRegular: React.FC<LanSparkleRegularProps>;
export default LanSparkleRegular;
