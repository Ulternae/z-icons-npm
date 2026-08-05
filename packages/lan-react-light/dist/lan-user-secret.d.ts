import React from 'react';

export interface LanUserSecretProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserSecret(props: LanUserSecretProps): React.ReactElement;
export default LanUserSecret;
