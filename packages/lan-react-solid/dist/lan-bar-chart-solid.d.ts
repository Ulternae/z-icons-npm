import React from 'react';

export interface LanBarChartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarChartSolid(props: LanBarChartSolidProps): React.ReactElement;
export default LanBarChartSolid;
