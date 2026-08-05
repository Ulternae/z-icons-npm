import React from 'react';

export interface MinaLineChartHexagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartHexagon(props: MinaLineChartHexagonProps): React.ReactElement;
export default MinaLineChartHexagon;
