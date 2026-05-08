import React from 'react';

export interface MinaChartColumnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnSolid: React.FC<MinaChartColumnSolidProps>;
export default MinaChartColumnSolid;
