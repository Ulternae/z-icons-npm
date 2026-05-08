import React from 'react';

export interface MinaLineChartHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartHexagonSolid: React.FC<MinaLineChartHexagonSolidProps>;
export default MinaLineChartHexagonSolid;
