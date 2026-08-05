import React from 'react';

export interface LanGaugeSimpleMinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMin(props: LanGaugeSimpleMinProps): React.ReactElement;
export default LanGaugeSimpleMin;
