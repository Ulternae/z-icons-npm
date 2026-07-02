import React from 'react';

export interface CoreGaugeHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGaugeHigh(props: CoreGaugeHighProps): React.ReactElement;
export default CoreGaugeHigh;
