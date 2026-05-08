import React from 'react';

export interface MinaLineChartDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartDiamondSolid: React.FC<MinaLineChartDiamondSolidProps>;
export default MinaLineChartDiamondSolid;
