import React from 'react';

export interface LanVaultRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVaultRegular(props: LanVaultRegularProps): React.ReactElement;
export default LanVaultRegular;
