import React from 'react';

export interface LanBuildingMemoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingMemoRegular(props: LanBuildingMemoRegularProps): React.ReactElement;
export default LanBuildingMemoRegular;
