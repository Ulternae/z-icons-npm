import React from 'react';

export interface LanBuildingColumnsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingColumnsSolid(props: LanBuildingColumnsSolidProps): React.ReactElement;
export default LanBuildingColumnsSolid;
