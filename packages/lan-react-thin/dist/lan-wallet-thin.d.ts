import React from 'react';

export interface LanWalletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalletThin(props: LanWalletThinProps): React.ReactElement;
export default LanWalletThin;
