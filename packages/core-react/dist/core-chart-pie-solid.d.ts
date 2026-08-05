import React from 'react';

export interface CoreChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreChartPieSolid(props: CoreChartPieSolidProps): React.ReactElement;
export default CoreChartPieSolid;
