import React from 'react';

export interface LanWalletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWalletSolid(props: LanWalletSolidProps): React.ReactElement;
export default LanWalletSolid;
