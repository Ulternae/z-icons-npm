import React from 'react';

export interface LanChartSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSimpleRegular(props: LanChartSimpleRegularProps): React.ReactElement;
export default LanChartSimpleRegular;
