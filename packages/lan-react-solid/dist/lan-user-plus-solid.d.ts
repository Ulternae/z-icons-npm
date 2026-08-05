import React from 'react';

export interface LanUserPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserPlusSolid(props: LanUserPlusSolidProps): React.ReactElement;
export default LanUserPlusSolid;
