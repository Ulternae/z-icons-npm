import React from 'react';

export interface CoreChartSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreChartSimpleSolid(props: CoreChartSimpleSolidProps): React.ReactElement;
export default CoreChartSimpleSolid;
