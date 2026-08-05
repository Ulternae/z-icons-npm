import React from 'react';

export interface LanBuildingMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingMagnifyingGlass(props: LanBuildingMagnifyingGlassProps): React.ReactElement;
export default LanBuildingMagnifyingGlass;
