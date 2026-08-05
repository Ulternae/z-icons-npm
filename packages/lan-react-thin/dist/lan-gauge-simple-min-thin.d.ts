import React from 'react';

export interface LanGaugeSimpleMinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMinThin(props: LanGaugeSimpleMinThinProps): React.ReactElement;
export default LanGaugeSimpleMinThin;
