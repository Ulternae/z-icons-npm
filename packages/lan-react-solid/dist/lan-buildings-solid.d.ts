import React from 'react';

export interface LanBuildingsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingsSolid(props: LanBuildingsSolidProps): React.ReactElement;
export default LanBuildingsSolid;
