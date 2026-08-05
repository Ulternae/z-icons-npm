import React from 'react';

export interface LanCoinsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoins(props: LanCoinsProps): React.ReactElement;
export default LanCoins;
