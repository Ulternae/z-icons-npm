import React from 'react';

export interface MinaLineChartSquareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartSquareSolid(props: MinaLineChartSquareSolidProps): React.ReactElement;
export default MinaLineChartSquareSolid;
