import React from 'react';

export interface MinaLineChartOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartOctagon(props: MinaLineChartOctagonProps): React.ReactElement;
export default MinaLineChartOctagon;
