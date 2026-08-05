import React from 'react';

export interface MinaChartColumnBigProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumnBig(props: MinaChartColumnBigProps): React.ReactElement;
export default MinaChartColumnBig;
