import React from 'react';

export interface LanVaultThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVaultThin(props: LanVaultThinProps): React.ReactElement;
export default LanVaultThin;
