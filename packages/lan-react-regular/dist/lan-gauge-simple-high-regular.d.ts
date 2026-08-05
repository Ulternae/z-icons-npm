import React from 'react';

export interface LanGaugeSimpleHighRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleHighRegular(props: LanGaugeSimpleHighRegularProps): React.ReactElement;
export default LanGaugeSimpleHighRegular;
