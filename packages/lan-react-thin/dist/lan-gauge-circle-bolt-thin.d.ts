import React from 'react';

export interface LanGaugeCircleBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCircleBoltThin(props: LanGaugeCircleBoltThinProps): React.ReactElement;
export default LanGaugeCircleBoltThin;
