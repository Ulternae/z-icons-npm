import React from 'react';

export interface LanBuildingMemoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingMemo(props: LanBuildingMemoProps): React.ReactElement;
export default LanBuildingMemo;
