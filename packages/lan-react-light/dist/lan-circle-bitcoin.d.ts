import React from 'react';

export interface LanCircleBitcoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBitcoin(props: LanCircleBitcoinProps): React.ReactElement;
export default LanCircleBitcoin;
