import React from 'react';

export interface LanChartSimpleHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSimpleHorizontalThin(props: LanChartSimpleHorizontalThinProps): React.ReactElement;
export default LanChartSimpleHorizontalThin;
