import React from 'react';

export interface LanChartSineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSineRegular(props: LanChartSineRegularProps): React.ReactElement;
export default LanChartSineRegular;
