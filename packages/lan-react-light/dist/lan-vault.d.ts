import React from 'react';

export interface LanVaultProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVault(props: LanVaultProps): React.ReactElement;
export default LanVault;
