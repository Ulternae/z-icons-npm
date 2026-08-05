import React from 'react';

export interface MinaChartColumnBigSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumnBigSolid(props: MinaChartColumnBigSolidProps): React.ReactElement;
export default MinaChartColumnBigSolid;
