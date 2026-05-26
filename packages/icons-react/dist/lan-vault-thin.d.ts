import React from 'react';

export interface LanVaultThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVaultThin: React.FC<LanVaultThinProps>;
export default LanVaultThin;
