import React from 'react';

export interface LanCarBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBuildingSolid(props: LanCarBuildingSolidProps): React.ReactElement;
export default LanCarBuildingSolid;
