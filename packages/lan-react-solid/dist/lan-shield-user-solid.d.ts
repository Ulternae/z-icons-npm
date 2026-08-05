import React from 'react';

export interface LanShieldUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldUserSolid(props: LanShieldUserSolidProps): React.ReactElement;
export default LanShieldUserSolid;
