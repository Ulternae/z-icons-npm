import React from 'react';

export interface LanPeoplePullingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeoplePullingSolid(props: LanPeoplePullingSolidProps): React.ReactElement;
export default LanPeoplePullingSolid;
