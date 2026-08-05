import React from 'react';

export interface LanCircleBitcoinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleBitcoinRegular(props: LanCircleBitcoinRegularProps): React.ReactElement;
export default LanCircleBitcoinRegular;
