import React from 'react';

export interface LanShieldAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldAltSolid(props: LanShieldAltSolidProps): React.ReactElement;
export default LanShieldAltSolid;
