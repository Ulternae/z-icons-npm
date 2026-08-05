import React from 'react';

export interface MinaLineChartDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartDiamond(props: MinaLineChartDiamondProps): React.ReactElement;
export default MinaLineChartDiamond;
