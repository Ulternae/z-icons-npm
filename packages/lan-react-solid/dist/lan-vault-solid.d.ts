import React from 'react';

export interface LanVaultSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVaultSolid(props: LanVaultSolidProps): React.ReactElement;
export default LanVaultSolid;
