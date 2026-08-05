import React from 'react';

export interface LanGaugeSimpleMaxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMaxRegular(props: LanGaugeSimpleMaxRegularProps): React.ReactElement;
export default LanGaugeSimpleMaxRegular;
