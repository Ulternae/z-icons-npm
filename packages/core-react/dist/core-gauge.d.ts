import React from 'react';

export interface CoreGaugeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGauge(props: CoreGaugeProps): React.ReactElement;
export default CoreGauge;
