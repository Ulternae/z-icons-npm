import React from 'react';

export interface NeoGaugeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoGauge(props: NeoGaugeProps): React.ReactElement;
export default NeoGauge;
