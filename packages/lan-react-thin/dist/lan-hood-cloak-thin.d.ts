import React from 'react';

export interface LanHoodCloakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHoodCloakThin(props: LanHoodCloakThinProps): React.ReactElement;
export default LanHoodCloakThin;
