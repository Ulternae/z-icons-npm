import React from 'react';

export interface LanChartPieAltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPieAltRegular: React.FC<LanChartPieAltRegularProps>;
export default LanChartPieAltRegular;
