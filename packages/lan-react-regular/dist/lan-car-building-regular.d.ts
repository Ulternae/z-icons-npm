import React from 'react';

export interface LanCarBuildingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBuildingRegular(props: LanCarBuildingRegularProps): React.ReactElement;
export default LanCarBuildingRegular;
