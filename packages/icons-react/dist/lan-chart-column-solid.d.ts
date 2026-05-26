import React from 'react';

export interface LanChartColumnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartColumnSolid: React.FC<LanChartColumnSolidProps>;
export default LanChartColumnSolid;
