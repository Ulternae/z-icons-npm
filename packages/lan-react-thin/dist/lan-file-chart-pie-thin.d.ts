import React from 'react';

export interface LanFileChartPieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileChartPieThin(props: LanFileChartPieThinProps): React.ReactElement;
export default LanFileChartPieThin;
