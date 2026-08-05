import React from 'react';

export interface LanWalletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalletRegular(props: LanWalletRegularProps): React.ReactElement;
export default LanWalletRegular;
