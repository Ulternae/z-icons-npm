import React from 'react';

export interface LanChartLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineThin(props: LanChartLineThinProps): React.ReactElement;
export default LanChartLineThin;
