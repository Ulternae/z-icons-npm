import React from 'react';

export interface LanFileShieldSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileShieldSolid(props: LanFileShieldSolidProps): React.ReactElement;
export default LanFileShieldSolid;
