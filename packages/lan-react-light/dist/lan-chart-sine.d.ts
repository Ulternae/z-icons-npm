import React from 'react';

export interface LanChartSineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSine(props: LanChartSineProps): React.ReactElement;
export default LanChartSine;
