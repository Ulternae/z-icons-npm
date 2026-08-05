import React from 'react';

export interface LanSquareBitcoinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBitcoin(props: LanSquareBitcoinProps): React.ReactElement;
export default LanSquareBitcoin;
