import React from 'react';

export interface LanFileChartLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileChartLineThin(props: LanFileChartLineThinProps): React.ReactElement;
export default LanFileChartLineThin;
