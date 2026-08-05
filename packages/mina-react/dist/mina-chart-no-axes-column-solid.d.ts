import React from 'react';

export interface MinaChartNoAxesColumnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNoAxesColumnSolid(props: MinaChartNoAxesColumnSolidProps): React.ReactElement;
export default MinaChartNoAxesColumnSolid;
