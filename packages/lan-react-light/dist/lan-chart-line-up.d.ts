import React from 'react';

export interface LanChartLineUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLineUp(props: LanChartLineUpProps): React.ReactElement;
export default LanChartLineUp;
