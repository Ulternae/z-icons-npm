import React from 'react';

export interface LanDisplayChartUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplayChartUp: React.FC<LanDisplayChartUpProps>;
export default LanDisplayChartUp;
