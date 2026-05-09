import React from 'react';

export interface MinaChartColumnBigSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnBigSolid: React.FC<MinaChartColumnBigSolidProps>;
export default MinaChartColumnBigSolid;
