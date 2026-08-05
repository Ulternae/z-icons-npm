import React from 'react';

export interface LanPeoplePantsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeoplePantsSolid(props: LanPeoplePantsSolidProps): React.ReactElement;
export default LanPeoplePantsSolid;
