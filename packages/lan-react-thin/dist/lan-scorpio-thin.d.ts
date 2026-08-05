import React from 'react';

export interface LanScorpioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScorpioThin(props: LanScorpioThinProps): React.ReactElement;
export default LanScorpioThin;
