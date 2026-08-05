import React from 'react';

export interface LanChartSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSimple(props: LanChartSimpleProps): React.ReactElement;
export default LanChartSimple;
