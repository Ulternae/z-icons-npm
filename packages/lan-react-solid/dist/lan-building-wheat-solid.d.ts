import React from 'react';

export interface LanBuildingWheatSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingWheatSolid(props: LanBuildingWheatSolidProps): React.ReactElement;
export default LanBuildingWheatSolid;
