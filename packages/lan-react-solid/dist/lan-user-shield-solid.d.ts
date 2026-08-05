import React from 'react';

export interface LanUserShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserShieldSolid(props: LanUserShieldSolidProps): React.ReactElement;
export default LanUserShieldSolid;
