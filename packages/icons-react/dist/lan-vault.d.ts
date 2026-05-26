import React from 'react';

export interface LanVaultProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVault: React.FC<LanVaultProps>;
export default LanVault;
