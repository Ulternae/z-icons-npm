import React from 'react';

export interface MinaLineChartHexagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartHexagonSolid(props: MinaLineChartHexagonSolidProps): React.ReactElement;
export default MinaLineChartHexagonSolid;
