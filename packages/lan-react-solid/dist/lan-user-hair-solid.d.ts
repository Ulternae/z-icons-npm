import React from 'react';

export interface LanUserHairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHairSolid(props: LanUserHairSolidProps): React.ReactElement;
export default LanUserHairSolid;
