import React from 'react';

export interface MinaLineChartOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartOctagonSolid(props: MinaLineChartOctagonSolidProps): React.ReactElement;
export default MinaLineChartOctagonSolid;
