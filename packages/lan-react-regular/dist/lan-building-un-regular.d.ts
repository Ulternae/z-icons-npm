import React from 'react';

export interface LanBuildingUnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingUnRegular(props: LanBuildingUnRegularProps): React.ReactElement;
export default LanBuildingUnRegular;
