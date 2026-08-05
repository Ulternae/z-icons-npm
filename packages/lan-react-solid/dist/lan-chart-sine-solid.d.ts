import React from 'react';

export interface LanChartSineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSineSolid(props: LanChartSineSolidProps): React.ReactElement;
export default LanChartSineSolid;
