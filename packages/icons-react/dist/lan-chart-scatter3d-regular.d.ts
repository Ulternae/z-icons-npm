import React from 'react';

export interface LanChartScatter3dRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatter3dRegular: React.FC<LanChartScatter3dRegularProps>;
export default LanChartScatter3dRegular;
