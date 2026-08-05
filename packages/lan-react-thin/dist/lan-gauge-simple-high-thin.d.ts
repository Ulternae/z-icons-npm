import React from 'react';

export interface LanGaugeSimpleHighThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleHighThin(props: LanGaugeSimpleHighThinProps): React.ReactElement;
export default LanGaugeSimpleHighThin;
