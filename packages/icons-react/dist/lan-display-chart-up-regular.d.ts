import React from 'react';

export interface LanDisplayChartUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplayChartUpRegular: React.FC<LanDisplayChartUpRegularProps>;
export default LanDisplayChartUpRegular;
