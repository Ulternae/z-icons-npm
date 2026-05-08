import React from 'react';

export interface MinaLineChartDiamondProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartDiamond: React.FC<MinaLineChartDiamondProps>;
export default MinaLineChartDiamond;
