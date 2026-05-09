import React from 'react';

export interface MinaChartNoAxesColumnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNoAxesColumnSolid: React.FC<MinaChartNoAxesColumnSolidProps>;
export default MinaChartNoAxesColumnSolid;
