import React from 'react';

export interface LanChartSineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSineThin(props: LanChartSineThinProps): React.ReactElement;
export default LanChartSineThin;
