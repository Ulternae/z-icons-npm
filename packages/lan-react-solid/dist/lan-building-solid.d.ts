import React from 'react';

export interface LanBuildingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingSolid(props: LanBuildingSolidProps): React.ReactElement;
export default LanBuildingSolid;
