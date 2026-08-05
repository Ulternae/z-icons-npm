import React from 'react';

export interface LanSquareBitcoinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBitcoinRegular(props: LanSquareBitcoinRegularProps): React.ReactElement;
export default LanSquareBitcoinRegular;
