import React from 'react';

export interface MinaChartPieTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartPieTwoSolid(props: MinaChartPieTwoSolidProps): React.ReactElement;
export default MinaChartPieTwoSolid;
