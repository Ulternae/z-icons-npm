import React from 'react';

export interface LanCircleBitcoinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBitcoinThin(props: LanCircleBitcoinThinProps): React.ReactElement;
export default LanCircleBitcoinThin;
