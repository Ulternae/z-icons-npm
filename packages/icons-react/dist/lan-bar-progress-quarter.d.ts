import React from 'react';

export interface LanBarProgressQuarterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressQuarter: React.FC<LanBarProgressQuarterProps>;
export default LanBarProgressQuarter;
