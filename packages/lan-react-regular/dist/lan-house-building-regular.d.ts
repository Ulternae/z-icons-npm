import React from 'react';

export interface LanHouseBuildingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHouseBuildingRegular(props: LanHouseBuildingRegularProps): React.ReactElement;
export default LanHouseBuildingRegular;
