import React from 'react';

export interface LanVaultSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVaultSolid: React.FC<LanVaultSolidProps>;
export default LanVaultSolid;
