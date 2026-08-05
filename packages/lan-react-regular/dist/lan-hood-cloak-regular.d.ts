import React from 'react';

export interface LanHoodCloakRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoodCloakRegular(props: LanHoodCloakRegularProps): React.ReactElement;
export default LanHoodCloakRegular;
