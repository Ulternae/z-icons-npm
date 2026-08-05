import React from 'react';

export interface LanShieldPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShieldPlusSolid(props: LanShieldPlusSolidProps): React.ReactElement;
export default LanShieldPlusSolid;
