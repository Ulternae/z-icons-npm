import React from 'react';

export interface LanBuildingColumnsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingColumnsRegular(props: LanBuildingColumnsRegularProps): React.ReactElement;
export default LanBuildingColumnsRegular;
