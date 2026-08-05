import React from 'react';

export interface MinaChartBarStackedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarStacked(props: MinaChartBarStackedProps): React.ReactElement;
export default MinaChartBarStacked;
