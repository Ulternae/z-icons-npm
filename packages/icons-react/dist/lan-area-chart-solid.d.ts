import React from 'react';

export interface LanAreaChartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAreaChartSolid: React.FC<LanAreaChartSolidProps>;
export default LanAreaChartSolid;
