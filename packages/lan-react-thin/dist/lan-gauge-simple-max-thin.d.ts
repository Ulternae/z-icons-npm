import React from 'react';

export interface LanGaugeSimpleMaxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeSimpleMaxThin(props: LanGaugeSimpleMaxThinProps): React.ReactElement;
export default LanGaugeSimpleMaxThin;
