import React from 'react';

export interface LanBuildingMemoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingMemoThin(props: LanBuildingMemoThinProps): React.ReactElement;
export default LanBuildingMemoThin;
