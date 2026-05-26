import React from 'react';

export interface LanVaultRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVaultRegular: React.FC<LanVaultRegularProps>;
export default LanVaultRegular;
