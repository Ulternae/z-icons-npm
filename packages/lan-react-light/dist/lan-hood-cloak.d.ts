import React from 'react';

export interface LanHoodCloakProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoodCloak(props: LanHoodCloakProps): React.ReactElement;
export default LanHoodCloak;
