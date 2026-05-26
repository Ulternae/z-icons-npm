import React from 'react';

export interface LanPercentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPercent: React.FC<LanPercentProps>;
export default LanPercent;
