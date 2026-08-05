import React from 'react';

export interface LanChartSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSimpleThin(props: LanChartSimpleThinProps): React.ReactElement;
export default LanChartSimpleThin;
