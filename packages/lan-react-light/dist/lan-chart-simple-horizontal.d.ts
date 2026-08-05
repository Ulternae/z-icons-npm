import React from 'react';

export interface LanChartSimpleHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSimpleHorizontal(props: LanChartSimpleHorizontalProps): React.ReactElement;
export default LanChartSimpleHorizontal;
