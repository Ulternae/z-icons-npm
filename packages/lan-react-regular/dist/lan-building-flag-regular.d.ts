import React from 'react';

export interface LanBuildingFlagRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuildingFlagRegular(props: LanBuildingFlagRegularProps): React.ReactElement;
export default LanBuildingFlagRegular;
