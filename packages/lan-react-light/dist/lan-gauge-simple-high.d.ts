import React from 'react';

export interface LanGaugeSimpleHighProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleHigh(props: LanGaugeSimpleHighProps): React.ReactElement;
export default LanGaugeSimpleHigh;
