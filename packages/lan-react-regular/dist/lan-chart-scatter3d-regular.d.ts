import React from 'react';

export interface LanChartScatter3dRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatter3dRegular(props: LanChartScatter3dRegularProps): React.ReactElement;
export default LanChartScatter3dRegular;
