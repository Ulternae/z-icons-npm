import React from 'react';

export interface MinaLineChartDiamondSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLineChartDiamondSolid(props: MinaLineChartDiamondSolidProps): React.ReactElement;
export default MinaLineChartDiamondSolid;
