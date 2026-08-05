import React from 'react';

export interface LanHouseBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseBuildingSolid(props: LanHouseBuildingSolidProps): React.ReactElement;
export default LanHouseBuildingSolid;
