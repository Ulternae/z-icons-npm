import React from 'react';

export interface LanChartLineUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineUpDown(props: LanChartLineUpDownProps): React.ReactElement;
export default LanChartLineUpDown;
