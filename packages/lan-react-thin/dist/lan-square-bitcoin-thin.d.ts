import React from 'react';

export interface LanSquareBitcoinThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareBitcoinThin(props: LanSquareBitcoinThinProps): React.ReactElement;
export default LanSquareBitcoinThin;
