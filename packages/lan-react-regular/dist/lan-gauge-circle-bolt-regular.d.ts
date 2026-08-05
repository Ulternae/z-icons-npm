import React from 'react';

export interface LanGaugeCircleBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGaugeCircleBoltRegular(props: LanGaugeCircleBoltRegularProps): React.ReactElement;
export default LanGaugeCircleBoltRegular;
