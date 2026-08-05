import React from 'react';

export interface LanChartPieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPieThin(props: LanChartPieThinProps): React.ReactElement;
export default LanChartPieThin;
