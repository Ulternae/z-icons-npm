import React from 'react';

export interface LanBuildingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingRegular(props: LanBuildingRegularProps): React.ReactElement;
export default LanBuildingRegular;
