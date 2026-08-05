import React from 'react';

export interface LanBuildingMemoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingMemoSolid(props: LanBuildingMemoSolidProps): React.ReactElement;
export default LanBuildingMemoSolid;
