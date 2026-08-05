import React from 'react';

export interface LanScorpioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScorpioRegular(props: LanScorpioRegularProps): React.ReactElement;
export default LanScorpioRegular;
