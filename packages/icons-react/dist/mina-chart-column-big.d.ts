import React from 'react';

export interface MinaChartColumnBigProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnBig: React.FC<MinaChartColumnBigProps>;
export default MinaChartColumnBig;
