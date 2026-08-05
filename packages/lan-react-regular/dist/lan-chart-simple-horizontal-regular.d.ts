import React from 'react';

export interface LanChartSimpleHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSimpleHorizontalRegular(props: LanChartSimpleHorizontalRegularProps): React.ReactElement;
export default LanChartSimpleHorizontalRegular;
